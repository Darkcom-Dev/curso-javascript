let notas = [9, 8, 7, 6, 5];
let ulElement = document.getElementById("notas");
let promedioElement = document.getElementById("promedio");
let notaMasAltaElement = document.getElementById("notaMasAlta");
let notaMasBajaElement = document.getElementById("notaMasBaja");

let promedio = 0;
let notaMasAlta = 0;
let aplazo = false;

function listarNotas() {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        console.log(notas[i]);
        ulElement.innerHTML += `<li>${notas[i]}</li>`;

        // obtenerNotaMasAlta
        if (notas[i] > notaMasAlta) {
            notaMasAlta = notas[i];
        }
        suma += notas[i];

    }
    promedio = suma / notas.length;
}

function calcularPromedio() {
    promedioElement.innerHTML = promedio;
    //return suma / notas.length;
}

function obtenerNotaMasAlta() {    
    notaMasAltaElement.innerHTML = notaMasAlta;
    //return notaMasAlta;
}

function existeAplazo() {
    let aplazo = false;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 4) {
            aplazo = true;
            break;
        }
    }
    notaMasBajaElement.innerHTML = aplazo;
    //return aplazo;
}