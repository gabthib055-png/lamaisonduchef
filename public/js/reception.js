const channel = document.body.dataset.channel;

const statusEl = document.getElementById("connection-status");
const activeContainer = document.getElementById("orders-active");
const completedContainer = document.getElementById("orders-completed");
const activeEmpty = document.getElementById("orders-active-empty");
const completedEmpty = document.getElementById("orders-completed-empty");
const activeCount = document.getElementById("active-count");
const completedCount = document.getElementById("completed-count");

const orderCards = new Map();

const protocol = window.location.protocol === "https:" ? "wss" : "ws";
const socket = new WebSocket(`${protocol}://${window.location.host}`);

const formatTime = (iso) => {
  const date = new Date(iso);
  return date.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const setStatus = (text) => {
  statusEl.textContent = text;
};

const updateCounts = () => {
  activeCount.textContent = activeContainer.children.length;
  completedCount.textContent = completedContainer.children.length;
  activeEmpty.hidden = activeContainer.children.length !== 0;
  completedEmpty.hidden = completedContainer.children.length !== 0;
};

const insertCardByTime = (container, card) => {
  const sentAt = new Date(card.dataset.sentAt).getTime();
  const children = Array.from(container.children);
  const insertBefore = children.find(
    (child) => new Date(child.dataset.sentAt).getTime() > sentAt
  );

  if (insertBefore) {
    container.insertBefore(card, insertBefore);
  } else {
    container.appendChild(card);
  }
};

const buildCard = (order, isCompleted = false) => {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.orderId = order.id;
  card.dataset.sentAt = order.sentAt;

  const header = document.createElement("div");
  header.className = "card-header";

  const title = document.createElement("h3");
  title.textContent = order.productName;

  const quantity = document.createElement("span");
  quantity.className = "pill";
  quantity.textContent = `x${order.quantity}`;

  header.appendChild(title);
  header.appendChild(quantity);

  const comments = order.comments ? order.comments : "Aucun";

  const details = document.createElement("div");
  const detailRows = [
    `Commentaires client : ${comments}`,
    `Heure d'envoi : ${formatTime(order.sentAt)}`,
    `Numero de table : ${order.table}`,
  ];

  if (isCompleted && order.completedAt) {
    detailRows.push(`Terminee a : ${formatTime(order.completedAt)}`);
  }

  detailRows.forEach((line) => {
    const p = document.createElement("p");
    p.textContent = line;
    details.appendChild(p);
  });

  card.appendChild(header);
  card.appendChild(details);

  if (!isCompleted) {
    const button = document.createElement("button");
    button.textContent = "Termine";
    button.addEventListener("click", () => {
      if (socket.readyState !== WebSocket.OPEN) return;
      button.disabled = true;
      socket.send(
        JSON.stringify({
          type: "order:done",
          orderId: order.id,
        })
      );
    });
    card.appendChild(button);
  }

  return card;
};

const renderSync = (payload) => {
  activeContainer.innerHTML = "";
  completedContainer.innerHTML = "";
  orderCards.clear();

  payload.active.forEach((order) => {
    const card = buildCard(order);
    orderCards.set(order.id, card);
    insertCardByTime(activeContainer, card);
  });

  payload.completed.forEach((order) => {
    const card = buildCard(order, true);
    orderCards.set(order.id, card);
    insertCardByTime(completedContainer, card);
  });

  updateCounts();
};

const renderCreated = (order) => {
  if (order.channel !== channel) return;
  const card = buildCard(order);
  orderCards.set(order.id, card);
  insertCardByTime(activeContainer, card);
  updateCounts();
};

const renderUpdated = (order) => {
  if (order.channel !== channel) return;
  const existing = orderCards.get(order.id);
  if (existing && existing.parentElement) {
    existing.parentElement.removeChild(existing);
  }
  const card = buildCard(order, order.status === "completed");
  orderCards.set(order.id, card);

  if (order.status === "completed") {
    insertCardByTime(completedContainer, card);
  } else {
    insertCardByTime(activeContainer, card);
  }

  updateCounts();
};

socket.addEventListener("open", () => {
  setStatus("Connecte");
  socket.send(
    JSON.stringify({
      type: "client:register",
      role: channel,
    })
  );
});

socket.addEventListener("close", () => {
  setStatus("Deconnecte");
});

socket.addEventListener("error", () => {
  setStatus("Erreur de connexion");
});

socket.addEventListener("message", (event) => {
  let message;
  try {
    message = JSON.parse(event.data);
  } catch (error) {
    return;
  }

  if (!message || typeof message.type !== "string") return;

  if (message.type === "server:sync" && message.orders) {
    renderSync(message.orders);
  }

  if (message.type === "order:created" && message.order) {
    renderCreated(message.order);
  }

  if (message.type === "order:updated" && message.order) {
    renderUpdated(message.order);
  }
});
