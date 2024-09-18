    
    
    function generarTienda(id) {
        // Crear un elemento <p> y establecer su texto
        const parrafo = document.createElement("p");
        
        // Crear un elemento <input> y establecer sus atributos
        const input = document.createElement("input");
        input.setAttribute("class", "numberInput");
        input.setAttribute("type", "number");
        input.setAttribute("min", "0");
        input.setAttribute("value", "0");
        input.setAttribute("id", `txtInput_${id}`);

        const label = document.createElement("label");
        label.textContent = `Tienda ${id}`;
        label.setAttribute("for", `txtInput_${id}`);        

        // Obtener el div con ID "contenido"
        const contenidoDiv = document.getElementById("contenido");

        // Agregar los elementos al div
        contenidoDiv.appendChild(parrafo);
        contenidoDiv.appendChild(label);
        contenidoDiv.appendChild(input);
    }

    function generarContenido(numero){
        let content = document.getElementById("contenido");

        for (let i = 1; i <= numero; i++) {
            generarTienda(i);            
        }
        
    }

    let inputs = [];
    let sumaTotal = 0;
    let masAlto = 0;
    let masBajo = 10000000;
    function calcular(){
        inputs = document.getElementsByClassName("numberInput");

        for (let i = 0; i < inputs.length; i++) {
            sumaTotal += Number(inputs[i].value);
            if (Number(inputs[i].value) > masAlto){
                masAlto = Number(inputs[i].value);
            }
            if (Number(inputs[i].value) < masBajo){
                masBajo = Number(inputs[i].value);
            }
        }
        let resultados = document.getElementById("resultados");
        resultados.innerHTML = `El total es: ${sumaTotal}<br>
        El mas alto es: ${masAlto}<br>
        El mas bajo es: ${masBajo}`;

        for (let i = 0; i < inputs.length; i++) {
            if ((Number(inputs[i].value) === masBajo)){
                inputs[i].setAttribute("style", "background-color: red");
            }
            if  ((Number(inputs[i].value) === masAlto)){
                inputs[i].setAttribute("style", "background-color: green");
            }
        }
    }

    // Llamar a la función generarContenido() cuando se cargue la página
    // window.addEventListener("load", generarContenido(labelIds[0]));