let audio = document.getElementById('audio');
let listaCanciones = document.getElementById('listaCanciones');

listaCanciones.addEventListener('change', cambiarCancion);

function cambiarCancion() {
    let cancionElegida = listaCanciones.value;
    audio.src = cancionElegida;
    audio.play();
    let evento = new CustomEvent('cambioDeCancion');
    audio.dispatchEvent(evento);
}

audio.addEventListener('cambioDeCancion', mostrarCancion);

function mostrarCancion() {
    console.log("La cancion actual es " + listaCanciones.value);
}