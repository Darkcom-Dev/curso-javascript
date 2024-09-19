
let registro = [];


function Empleado(legajo, nombre, apellido, nacimiento, cargo){
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo = cargo;
}

function registrar(){
    let legajo = document.getElementById("legajo").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let nacimiento = document.getElementById("nacimiento").value;
    let cargo = document.getElementById("cargo").value;

    let empleado = new Empleado(legajo, nombre, apellido,nacimiento,cargo);

    registro.push(empleado);

    alert(`${legajo} ${nombre} ${apellido} ha sido registrado`);
    limpiarRegistro();

}

function limpiarRegistro(){
    document.getElementById("legajo").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("nacimiento").value = "";
    document.getElementById("cargo").value = "";
}

function listar(){
    let list = "";
    for(let prop of registro){
        for(let key in prop){
            list += (`${key}: ${prop[key]}\n`);
        }
        list += "\n";
    }
    alert(list);
}