const statusEl = document.getElementById("connection-status");
const formStatus = document.getElementById("form-status");
const productInput = document.getElementById("productName");
const quantityInput = document.getElementById("quantity");
const commentsInput = document.getElementById("comments");
const tableInput = document.getElementById("table");
const sendKitchenBtn = document.getElementById("send-kitchen");
const sendBarBtn = document.getElementById("send-bar");

const protocol = window.location.protocol === "https:" ? "wss" : "ws";
const socket = new WebSocket(`${protocol}://${window.location.host}`);

const setStatus = (text) => {
  statusEl.textContent = text;
};

const setFormStatus = (text, isError = false) => {
  formStatus.textContent = text;
  formStatus.style.color = isError ? "#b00020" : "#4b4b4b";
};

const buildOrderPayload = (channel) => {
  const productName = productInput.value.trim();
  const quantity = Number(quantityInput.value);
  const comments = commentsInput.value.trim();
  const table = tableInput.value.trim();

  if (!productName) {
    setFormStatus("Le nom du produit est obligatoire.", true);
    return null;
  }

  if (!Number.isFinite(quantity) || quantity <= 0) {
    setFormStatus("La quantite doit etre superieure a 0.", true);
    return null;
  }

  if (!table) {
    setFormStatus("Le numero de table est obligatoire.", true);
    return null;
  }

  return {
    type: "order:new",
    order: {
      channel,
      productName,
      quantity,
      comments,
      table,
    },
  };
};

const sendOrder = (channel) => {
  if (socket.readyState !== WebSocket.OPEN) {
    setFormStatus("Connexion WebSocket indisponible.", true);
    return;
  }

  const payload = buildOrderPayload(channel);
  if (!payload) return;

  socket.send(JSON.stringify(payload));
  setFormStatus("Commande envoyee.");
  commentsInput.value = "";
};

sendKitchenBtn.addEventListener("click", () => sendOrder("cuisine"));
sendBarBtn.addEventListener("click", () => sendOrder("bar"));

socket.addEventListener("open", () => {
  setStatus("Connecte");
  socket.send(
    JSON.stringify({
      type: "client:register",
      role: "client",
    })
  );
});

socket.addEventListener("close", () => {
  setStatus("Deconnecte");
});

socket.addEventListener("error", () => {
  setStatus("Erreur de connexion");
});
