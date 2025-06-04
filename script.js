// Mensajes para cada botón
const mensajesSi = [
    "¡Sabía que dirías que sí😍!  SIEMPRE TE QUERRE CON TODO MI CORAZON ERES LO MEJOR QUE  HA PASADO❤️❤️",
];

let contadorSi = 0;

document.getElementById("yesButton").addEventListener("click", function() {
    let nuevoMensaje = document.createElement("div");
    nuevoMensaje.classList.add("mensajeCuadro");
    nuevoMensaje.textContent = mensajesSi[contadorSi];
    document.getElementById("mensajeContainer").appendChild(nuevoMensaje);

    contadorSi = (contadorSi + 1) % mensajesSi.length; // Para que los mensajes se repitan
});
// script.js
document.getElementById("noButton").addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth - 100; // Posición aleatoria en X
    let y = Math.random() * window.innerHeight - 50; // Posición aleatoria en Y
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
// Evento para el botón "No" al hacer clic
document.getElementById("noButton").addEventListener("click", function() {
    this.style.position = "static"; // Restablecer la posición al hacer clic
    document.getElementById("mensajeNo").textContent = "¡No puedes escapar de mi amor! 😈";
});
