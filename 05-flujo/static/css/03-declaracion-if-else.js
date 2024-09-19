function evaluarCompra(){
    let elementoRespuesta = document.getElementById("decision");

    let elementoPrecio = document.getElementById("textoPrecio");
    let precio = elementoPrecio.value;

    if(precio < 5){
        elementoRespuesta.textContent = "Comprar dos cartones de leche";
    } else {
        if(precio < 8){
            elementoRespuesta.textContent = "Comprar 1 carton de leche";
        } else {
            elementoRespuesta.textContent = "No comprar";
        }
        
    }
}