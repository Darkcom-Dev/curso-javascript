/*
Importacion de modulos
*/
// Modulos
/*
Deficion de Clases
*/
/*
class Algo{
	constructor(){}
}
*/
/*
Definicion de funciones internas
*/
/*
function algo(parametros){
	return "Algo"
}
*/
/*
Definicion de funciones que enlazan con HTML
*/

function cargarDatos(){
	let banco = document.getElementById("banco");
	let sucursal = document.getElementById("sucursal");
	
	let nombre = document.getElementById("nombre");
	let nro_cuenta = document.getElementById("nro_cuenta");
	
	let monto_dolares = document.getElementById("monto_dolares");
	let monto_euros = document.getElementById("monto_euros");
	let cbu = document.getElementById("cbu");

	fetch('datos.json')
	.then(response => response.json())
	.then(datos => {
		banco.innerHTML = datos.banco;
		sucursal.innerHTML = datos.sucursal;

		nombre.innerHTML = datos.nombre;
		nro_cuenta.innerHTML = datos.nro_cuenta;
		
		monto_dolares.innerHTML = datos.saldo.monto_dolares;
		monto_euros.innerHTML = datos.saldo.monto_euros;
		cbu.innerHTML = datos.cbu;
	})
	.catch(error => alert(error));
}

/*
Variables Globales
*/

// etc