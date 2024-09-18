

function Automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

Automovil.prototype.venderAutomovil = function(nuevoTitular){
    this.titular = nuevoTitular;
    console.log(`Automovil vendido a ${this.titular}`);
}

Automovil.prototype.verAuto = function(){
    return (`Marca: ${this.marca} Modelo: ${this.modelo} - Año: ${this.anio} - Titular: ${this.titular}`);
}

Automovil.prototype.encender = function(){
    alert("El automovil está encendido");
}

registroAutomoviles = [];

function limpiarCampos(){
    document.getElementById("marca").value = "";
    document.getElementById("modelo").value = "";
    document.getElementById("color").value = "";
    document.getElementById("anio").value = "";
    document.getElementById("titular").value = "";
}

function registrarAutomovil(){
    let marcaInput = document.getElementById("marca");
    let modeloInput = document.getElementById("modelo");
    let colorInput = document.getElementById("color");
    let anioInput = document.getElementById("anio");
    let titularInput = document.getElementById("titular");

    let automovil = new Automovil(marcaInput.value, modeloInput.value, colorInput.value, anioInput.value, titularInput.value);
    registroAutomoviles.push(automovil);
    limpiarCampos();
    alert("Automovil registrado");
}

function mostrarRegistroAutomoviles(){
    //TODO: Considerar usar un <ul><li> por cada elemento
    pMensaje = document.getElementById("mensaje");
    pMensaje.innerHTML = "";
    for (let i = 0; i < registroAutomoviles.length; i++){
        pMensaje.innerHTML += registroAutomoviles[i].verAuto();
        pMensaje.innerHTML += "<br>";
    }
}

function encenderAuto(){
    let indice = +document.getElementById("indexAuto").value;
    
    if (indice < registroAutomoviles.length){
        registroAutomoviles[indice].encender();
    }
    else
    {
        alert("Indice fuera de rango");
    }
        
    
}

function venderAutomovil(){
    let nuevoTitular = document.getElementById("nuevoTitular").value;
    let indice = +document.getElementById("indexAuto").value;
    

    if (indice < registroAutomoviles.length){
        registroAutomoviles[indice].venderAutomovil(nuevoTitular);
        alert("Automovil vendido a "+nuevoTitular);
    }
    else
    {
        alert("Indice fuera de rango");
    }
    
}