/*
Importacion de modulos
*/
// Modulos
/*
Definicion de clases
*/
class Animal{
	constructor(nombre, peso, edad){
		this._nombre = nombre;
		this._peso = peso;
		this._edad = edad;
	}
	mostrarInfo(){
		return (`Nombre: ${this._nombre} - Peso: ${this._peso} - Edad: ${this._edad}`);
	}
	get nombre(){	return this._nombre;	}
	get peso(){	return this._peso;	}
	get edad(){	return this._edad;	}
}

class Perro extends Animal{
	constructor(nombre, peso, edad, raza){
		super(nombre, peso, edad);
		this._raza = raza;
	}
	mostrarInfo(){
		let mensaje = super.mostrarInfo();
		mensaje += `\nRaza: ${this._raza}`;
		return mensaje;
	}
	get raza(){return this._raza;	}
	set raza(newRaza){this._raza = newRaza;	}
}

class Gato extends Animal{
	constructor(nombre, peso, edad, sexo){
		super(nombre, peso, edad);
		this._sexo = sexo;
	}
	mostrarInfo(){
		let mensaje = super.mostrarInfo();
		mensaje += `\nSexo: ${this._sexo}`;
		return mensaje;
	}
	get sexo(){return this._sexo;	}
	set sexo(newSexo){this._sexo = newSexo;	}
}
class Conejo extends Animal{
	constructor(nombre, peso, edad, color){
		super(nombre, peso, edad);
		this._color = color;
	}
	mostrarInfo(){
		let mensaje = super.mostrarInfo();
		mensaje += `\nColor: ${this._color}`;
		return mensaje;
	}
	get color(){return this._color;	}
	set color(newColor){this._color = newColor;	}
}
/*
Definicion de funciones internas
*/

// Funciones

/*
Definicion de funciones que enlazan con HTML
*/

function limpiarInputPerro(){
	document.getElementById("nombrePerro").value = "";
	document.getElementById("pesoPerro").value = "";
	document.getElementById("edadPerro").value = "";
	document.getElementById("razaPerro").value = "";
}

function registrarPerro(){
	let inputNombre = document.getElementById("nombrePerro").value;
	let inputPeso = document.getElementById("pesoPerro").value;
	let inputEdad = document.getElementById("edadPerro").value;
	let inputRaza = document.getElementById("razaPerro").value;

	let perro = new Perro(inputNombre, inputPeso, inputEdad, inputRaza);
	perros.push(perro);
	limpiarInputPerro();
}

function listarPerros(){
	let ulPerros = document.getElementById("ulPerros");

	for (let perro of perros){
		let liPerro = document.createElement("li");
		liPerro.innerHTML = perro.mostrarInfo();
		ulPerros.appendChild(liPerro);
	}

}

function limpiarInputGato(){
	document.getElementById("nombreGato").value = "";
	document.getElementById("pesoGato").value = "";
	document.getElementById("edadGato").value = "";
	document.getElementById("sexoGato").value = "";
}

function registrarGato(){
	let inputNombre = document.getElementById("nombreGato").value;
	let inputPeso = document.getElementById("pesoGato").value;
	let inputEdad = document.getElementById("edadGato").value;
	let inputSexo = document.getElementById("sexoGato").value;

	let gato = new Gato(inputNombre, inputPeso, inputEdad, inputSexo);
	gatos.push(gato);
	limpiarInputGato();
}

function listarGatos(){
	let ulGatos = document.getElementById("ulGatos");

	for (let gato of gatos){
		let liGato = document.createElement("li");
		liGato.innerHTML = gato.mostrarInfo();
		ulGatos.appendChild(liGato);
	}
}

function limpiarInputConejo(){
	document.getElementById("nombreConejo").value = "";
	document.getElementById("pesoConejo").value = "";
	document.getElementById("edadConejo").value = "";
	document.getElementById("colorConejo").value = "";
}

function registrarConejo(){
	let inputNombre = document.getElementById("nombreConejo").value;
	let inputPeso = document.getElementById("pesoConejo").value;
	let inputEdad = document.getElementById("edadConejo").value;
	let inputColor = document.getElementById("colorConejo").value;

	let conejo = new Conejo(inputNombre, inputPeso, inputEdad, inputColor);
	conejos.push(conejo);
	limpiarInputConejo();
}

function listarConejos(){
	let ulConejos = document.getElementById("ulConejos");

	for (let conejo of conejos){
		let liConejo = document.createElement("li");
		liConejo.innerHTML = conejo.mostrarInfo();
		ulConejos.appendChild(liConejo);
	}
}

function mostrarInfo(){
	alert(firulais.mostrarInfo());
	alert(minino.mostrarInfo());
	alert(bonnie.mostrarInfo());
}


/*
Variables Globales
*/

let perros = [];
let gatos = [];
let conejos = [];

let firulais = new Perro("Firulais", 12, 5, "Chandanes")
let minino = new Gato("Minino", 2, 5, "Macho")
let bonnie = new Conejo("Bonnie", 3, 2, "Castaño")

perros.push(firulais);
gatos.push(minino);
conejos.push(bonnie);
// etc