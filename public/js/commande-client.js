const createCommandeSocket = () => {
  const protocol = window.location.protocol === "https:" ? "wss" : "ws";
  const socket = new WebSocket(`${protocol}://${window.location.host}`);

  socket.addEventListener("open", () => {
    socket.send(
      JSON.stringify({
        type: "client:register",
        role: "client",
      })
    );
  });

  return socket;
};

const sendOrderToSocket = (socket, order) => {
  if (socket.readyState !== WebSocket.OPEN) {
    return { ok: false, message: "Connexion WebSocket indisponible." };
  }

  if (!order || typeof order !== "object") {
    return { ok: false, message: "Commande invalide." };
  }

  const payload = {
    type: "order:new",
    order: {
      channel: order.channel,
      productName: order.productName,
      quantity: Number(order.quantity),
      comments: order.comments || "",
      table: order.table,
    },
  };

  socket.send(JSON.stringify(payload));
  return { ok: true };
};
/* 
  Script a coller dans la page de commande existante (Lovable).
  Utilisation :
    envoyerCommande("cuisine", {
      productName: "Filet de boeuf",
      quantity: 2,
      comments: "Sans sel",
      table: "Table 42",
    });
*/

const protocol = window.location.protocol === "https:" ? "wss" : "ws";
const socket = new WebSocket(`${protocol}://${window.location.host}`);

const statusListeners = [];

export const onWsStatusChange = (callback) => {
  if (typeof callback === "function") {
    statusListeners.push(callback);
  }
};

const notifyStatus = (text) => {
  statusListeners.forEach((cb) => cb(text));
};

export const envoyerCommande = (channel, order) => {
  if (socket.readyState !== WebSocket.OPEN) {
    return {
      ok: false,
      message: "Connexion WebSocket indisponible.",
    };
  }

  const payload = {
    type: "order:new",
    order: {
      channel,
      productName: order.productName,
      quantity: Number(order.quantity),
      comments: order.comments || "",
      table: order.table,
    },
  };

  socket.send(JSON.stringify(payload));
  return { ok: true };
};

socket.addEventListener("open", () => {
  notifyStatus("Connecte");
  socket.send(
    JSON.stringify({
      type: "client:register",
      role: "client",
    })
  );
});

socket.addEventListener("close", () => {
  notifyStatus("Deconnecte");
});

socket.addEventListener("error", () => {
  notifyStatus("Erreur de connexion");
});
