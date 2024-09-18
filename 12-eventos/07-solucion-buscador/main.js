
/**
 * Fetches the media list from the provided URL and updates the mediaJson variable.
 *
 * @param {string} mediaList - The URL of the media list to fetch.
 * @return {undefined} This function does not return a value.
 */
function getMediaList(mediaList){
	fetch(mediaList)
	.then(response => response.json())
	.then(data => {
		if(data && data.data){
			mediaJson = data.data;
			let cambioArchivo = new Event('cambioArchivo');
			document.dispatchEvent(cambioArchivo);
		}
		else console.log('No se pudo cargar el archivo');
	})	
}

function archivoBaseAlert(){
	console.log(`El archivo de base ahora es… [${mediaJson[0].nombre}]`);
}

/**
 * Finds the specified media in the mediaJson array and displays the matching results on the webpage.
 *
 * @param {string} media - The media to search for in the mediaJson array.
 * @return {undefined} This function does not return a value.
 */

// Funcion que limpia los resultados
function limpiarResultados(){
	resultados.innerHTML = '';
}

function findInMediaJson(media){
	//console.log(media.toUpperCase());
	limpiarResultados();
	
	if (mediaJson.length > 0 && mediaJson.length > 3) {
		for (let m of mediaJson) {
		if(m.nombre.startsWith(media.toUpperCase())){
				let li = document.createElement('li');
				li.innerHTML = m.nombre.toUpperCase();

				let p = document.createElement('p');
				p.innerHTML = m.sinopsis;
				p.style.display = 'none';
				li.appendChild(p);

				li.addEventListener('mouseover', () => {
					p.style.display = 'block';
				});
				li.addEventListener('mouseout', () => {
					p.style.display = 'none';
				})

				resultados.appendChild(li);				
			}
		}
	}
	
}

function verificarInput(e){
	const {key} = e;
	const allowedKeys = [" ","Backspace"];
	let verification = (key >= "a" && key <= "z") || (key >= "A" && key <= "Z") ||	allowedKeys.includes(key);
	
	if (verification === false) e.preventDefault(); 
	
}

let selectMedia = document.getElementById("selectMedia");
let inputMedia = document.getElementById("inputMedia");
let buttonMedia = document.getElementById("buttonMedia");
let resultados = document.getElementById("resultados");
let mediaJson = [];

//document.addEventListener('DOMContentLoaded', getMediaList(selectMedia.value+'.json'));

document.addEventListener('cambioArchivo', () => {
	archivoBaseAlert();
})

addEventListener('change', () => {
	getMediaList(selectMedia.value+'.json');
});

document.addEventListener('cambioArchivo', () => {
	archivoBaseAlert();
})

inputMedia.addEventListener('keydown', verificarInput);

//buttonMedia.addEventListener('click', findInMediaJson(inputMedia.value));//