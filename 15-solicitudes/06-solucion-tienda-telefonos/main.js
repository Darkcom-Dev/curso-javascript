
function listarTelefonos(){

	let resultados = document.getElementById('resultados');

	axios.get('https://my-json-server.typicode.com/fedegaray/telefonos/db')
	.then(function (response) {
		console.log(response);


		for(let dat of response.data.dispositivos){
			let tr = document.createElement('tr');
			let id = document.createElement('td');
			let marca = document.createElement('td');
			let modelo = document.createElement('td');
			let color = document.createElement('td');
			let almacenamiento = document.createElement('td');
			let procesador = document.createElement('td');

			id.innerHTML = dat.id;
			marca.innerHTML = dat.marca;
			modelo.innerHTML = dat.modelo;
			color.innerHTML = dat.color;
			almacenamiento.innerHTML = dat.almacenamiento;
			procesador.innerHTML = dat.procesador;

			tr.appendChild(id);
			tr.appendChild(marca);
			tr.appendChild(modelo);
			tr.appendChild(color);
			tr.appendChild(almacenamiento);
			tr.appendChild(procesador);

			resultados.appendChild(tr);
		}
	
	})
	.catch(error => console.error(error));
}

function obtenerRegistroConId(){
	let id = parseInt(document.getElementById('id').value);
	
	axios.get(`https://my-json-server.typicode.com/fedegaray/telefonos/db/data/dispositivos/`)
	.then(function (response) {
		console.log(response);
		let marca	= document.getElementById('marca');
		let modelo	= document.getElementById('modelo');
		let color	= document.getElementById('color');
		let almacenamiento	= document.getElementById('almacenamiento');
		let procesador	= document.getElementById('procesador');

		marca.value = response.data[id].marca;
		modelo.value = response.data[id].modelo;
		color.value = response.data[id].color;
		almacenamiento.value = response.data[id].almacenamiento;
		procesador.value = response.data[id].procesador;

	})
	.catch(error => console.error(error));
}

function actualizarRegistroConId(){
	let id = parseInt(document.getElementById('id').value);
	let marca	= document.getElementById('marca').value;
	let modelo	= document.getElementById('modelo').value;
	let color	= document.getElementById('color').value;
	let almacenamiento	= document.getElementById('almacenamiento').value;
	let procesador	= document.getElementById('procesador').value;

	axios.put(`https://my-json-server.typicode.com/fedegaray/telefonos/db/data/dispositivos/${id}`, {
		marca,
		modelo,
		color,
		almacenamiento,
		procesador
	})
	.then(function (response) {
		alert(response);
	})
	.catch(error => console.error(error));
}

function borrarRegistroConId(){
	let id = parseInt(document.getElementById('id').value);

	axios.delete(`https://my-json-server.typicode.com/fedegaray/telefonos/db/${id}`)
	.then(function (response) {
		alert(response);
	})
	.catch(error => console.error(error));
}

function registrarConId(){
	let marca	= document.getElementById('marca').value;
	let modelo	= document.getElementById('modelo').value;
	let color	= document.getElementById('color').value;
	let almacenamiento	= document.getElementById('almacenamiento').value;
	let procesador	= document.getElementById('procesador').value;

	axios.post(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/`, {
		marca,
		modelo,
		color,
		almacenamiento,
		procesador
	})
	.then(function (response) {
		alert(response);
	})
	.catch(error => console.error(error));
}