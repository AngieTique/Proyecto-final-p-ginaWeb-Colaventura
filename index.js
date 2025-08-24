window.onload = function() {
      document.getElementById("overlay").classList.add("active");
    }

function cerrarPopup() {
      document.getElementById("overlay").classList.remove("active");
    }

const chatbot = document.getElementById("chatbot");
const chatIcon = document.getElementById("chatIcon");
const chatHeader = document.getElementById("chatHeader");
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

// Mostrar chatbot
chatIcon.addEventListener("click", () => {
  chatbot.style.display = "flex";
  chatIcon.style.display = "none";
});

// Minimizar
chatHeader.addEventListener("click", () => {
  chatbot.style.display = "none";
  chatIcon.style.display = "flex";
});

// Enviar mensaje al presionar botón
sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

// Función enviar mensaje
function sendMessage() {
  const text = chatInput.value.trim();
  if (text === "") return;
  addMessage(text, "user");
  chatInput.value = "";
  setTimeout(() => botResponse(text), 500);
}

// Agregar mensaje al chat
function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

  // Respuestas del bot
  function botResponse(input) {
    let response = "";
    if (input.toLowerCase().includes("aventura")) {
      response = "Tenemos increibles aventuras que esperan por ti 🧗‍♀️🏃🏻 :\n\n" + 
                  "• Rafting en Cañon del Río Guejar – $120,000 COP 🚣‍♀️\n" +
                  "• Parapente en Sopó – $180,000 COP 🪂\n" +
                  "• Cuatrimotos en Cumaral – $100,000 COP 🤸‍♂️\n" +
                  "• Caminata ecológica cerca a Villavicencio – $60,000 COP 🥾";
    } else if (input.toLowerCase().includes("consejos")) {
      response = "Si vas a vivir aventuras como rafting, parapente, cuatrimotos o caminatas ecológicas, recuerda siempre ir cómodo y preparado: usa ropa ligera y calzado adecuado (tenis o botas), lleva bloqueador solar, agua e incluso repelente para los mosquitos; evita comer pesado antes de actividades extremas como parapente o rafting y no lleves objetos sueltos que puedan caerse. Escucha siempre a los instructores, confía en el equipo de seguridad y disfruta cada experiencia con responsabilidad para que tu aventura sea inolvidable.✨";
    } else if (input.toLowerCase().includes("contactodatos")) {
      response = "Déjanos tu correo electrónico y tu número de WhatsApp 📩📱, así podremos enviarte todos los detalles y resolver tus dudas.";
    } else {
      response = "Lo siento, no entendí. ¿Quieres preguntar por 'Aventuras del Mes', 'Consejos para tus aventuras' o 'Estas interesad@ en dejar tus datos'? 🤔";
    }
    addMessage(response, "bot");
  }

    function sendMessage() {
    const text = chatInput.value.trim();
    if (text === "") return;

    // Guardar la última respuesta en localStorage
    localStorage.setItem("ultimaRespuesta", text);

    // Mostrar en consola lo que escribió el usuario
    console.log("Usuario escribió:", text);

    // Mostrar mensaje del usuario
    addMessage(text, "user");
    chatInput.value = "";

    // Responder SIEMPRE con agradecimiento
    setTimeout(() => {
      console.log("Leo respondió: Gracias, te estaremos contactando pronto.");
      addMessage("✅ Gracias, te estaremos contactando pronto.", "bot");
    }, 500);
  }

    function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.innerText = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }