const path = require("path");
const http = require("http");
const express = require("express");
const { WebSocketServer } = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "commande.html"));
});

app.get("/cuisine", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "cuisine.html"));
});

app.get("/bar", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "bar.html"));
});

const orders = new Map();
let sequence = 1;

const CHANNELS = new Set(["cuisine", "bar"]);

const safeSend = (socket, payload) => {
  if (socket.readyState !== socket.OPEN) return;
  socket.send(JSON.stringify(payload));
};

const broadcastToChannel = (channel, payload) => {
  for (const client of wss.clients) {
    if (client.readyState !== client.OPEN) continue;
    if (client.role !== channel) continue;
    client.send(JSON.stringify(payload));
  }
};

const serializeOrdersForChannel = (channel) => {
  const active = [];
  const completed = [];

  for (const order of orders.values()) {
    if (order.channel !== channel) continue;
    if (order.status === "completed") {
      completed.push(order);
    } else {
      active.push(order);
    }
  }

  const sortByTime = (a, b) =>
    new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime();

  active.sort(sortByTime);
  completed.sort(sortByTime);

  return { active, completed };
};

const buildOrder = (payload) => {
  const productName =
    typeof payload.productName === "string" ? payload.productName.trim() : "";
  const comments =
    typeof payload.comments === "string" ? payload.comments.trim() : "";
  const table =
    typeof payload.table === "string" ? payload.table.trim() : "";
  const quantity = Number(payload.quantity);
  const channel = payload.channel;

  if (!productName || !table || !CHANNELS.has(channel)) {
    return null;
  }

  if (!Number.isFinite(quantity) || quantity <= 0) {
    return null;
  }

  return {
    id: `cmd_${sequence++}`,
    channel,
    productName,
    quantity,
    comments,
    table,
    sentAt: new Date().toISOString(),
    status: "active",
  };
};

wss.on("connection", (ws) => {
  ws.role = "unknown";

  ws.on("message", (raw) => {
    let message;
    try {
      message = JSON.parse(raw.toString());
    } catch (error) {
      return;
    }

    if (!message || typeof message.type !== "string") {
      return;
    }

    if (message.type === "client:register") {
      const role = typeof message.role === "string" ? message.role : "unknown";
      ws.role = role;

      if (CHANNELS.has(role)) {
        safeSend(ws, {
          type: "server:sync",
          orders: serializeOrdersForChannel(role),
        });
      }

      return;
    }

    if (message.type === "order:new") {
      const order = buildOrder(message.order || {});
      if (!order) return;

      orders.set(order.id, order);
      broadcastToChannel(order.channel, {
        type: "order:created",
        order,
      });
      return;
    }

    if (message.type === "order:done") {
      const orderId = message.orderId;
      if (typeof orderId !== "string") return;

      const existing = orders.get(orderId);
      if (!existing || existing.status === "completed") return;

      const updated = {
        ...existing,
        status: "completed",
        completedAt: new Date().toISOString(),
      };
      orders.set(orderId, updated);

      broadcastToChannel(updated.channel, {
        type: "order:updated",
        order: updated,
      });
    }
  });
});

server.listen(PORT, () => {
  console.log(`Serveur WebSocket actif sur http://localhost:${PORT}`);
});
