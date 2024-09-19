let socket = new WebSocket('ws://localhost:8080');
let mensajeIngresado = document.getElementById('mensajeIngresado');
let botonEnviar = document.getElementById('botonEnviar');

function mostrarMensajes(contenido) {
    let contenedorMensajes = document.getElementById('mensajeChat');
    let elementoMensaje = document.createElement('p');
    elementoMensaje.innerText = contenido;
    contenedorMensajes.appendChild(elementoMensaje);
};

botonEnviar.onclick = function() {
    let mensaje = mensajeIngresado.value;
    mostrarMensajes(mensaje);
    socket.send(mensaje);
};

socket.onmessage = function(event) {
    let mensaje = event.data;
    mostrarMensajes(mensaje);
};