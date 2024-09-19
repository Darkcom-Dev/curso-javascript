let campo = document.getElementById("miCampo");


function verificarNumero(event){
    if(event.keyCode < 48 || event.keyCode > 57){
        event.preventDefault();
    };
};

campo.addEventListener('keydown', verificarNumero);

campo.addEventListener('keyup', function(event){
    console.log("Entrada del usuario: " + event.target.value);
});

campo.addEventListener('keypress', function(event){
    console.log("Caracter ingresado: " + event.key);
})
