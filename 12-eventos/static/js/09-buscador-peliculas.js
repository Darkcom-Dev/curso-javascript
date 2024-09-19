//VARIABLES
let selector = document.getElementById('miSelector');
let input = document.getElementById('miInput');
let boton = document.getElementById('miBoton');
let lista = document.getElementById('miListado');

let archivo = 'peliculas.json';


//ESCUCHADORES DE EVENTOS
selector.addEventListener('change', cambiarArchivo);
selector.addEventListener('cambioModo', mensajeModo);
input.addEventListener('keydown', verificarInput);
boton.addEventListener('click', buscar);


//FUNCIONES
function cambiarArchivo() {
    archivo = selector.value;
    let evento = new CustomEvent('cambioModo');
    selector.dispatchEvent(evento);
}

function mensajeModo() {
    alert("El archivo de búsqueda ahora es " + selector.value);
}

function verificarInput(evento) {
    if((evento.keyCode < 65 || evento.keyCode > 90) && evento.keyCode != 32 && evento.keyCode != 8) {
        evento.preventDefault();
    }
}

function buscar() {
    lista.innerHTML = "";

    fetch(archivo)
    .then(respuesta => respuesta.json())
    .then(function(salida) {
        for(let item of salida.data){
            if(item.nombre.startsWith(input.value.toUpperCase())) {
                let p = document.createElement('p');
                p.id = item.nombre;
                p.innerHTML = item.sinopsis;
                p.style.display = "none";

                let li = document.createElement('li');
                li.innerHTML = item.nombre;
                li.addEventListener('mouseover', function() {
                    let p = document.getElementById(item.nombre);
                    p.style.display = 'block';
                });

                li.addEventListener('mouseout', function() {
                    let p = document.getElementById(item.nombre);
                    p.style.display = 'none';
                });

                li.appendChild(p);
                lista.appendChild(li);
            }
        }
    })
    .catch(function(error) {
        console.log(error);
    })
}