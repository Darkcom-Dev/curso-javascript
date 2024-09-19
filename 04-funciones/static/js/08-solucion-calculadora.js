function obtenerNumeros(){
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    return [parseFloat(num1), parseFloat(num2)];
}

function suma(){
    let nums = obtenerNumeros();    
    mostrarResultado(nums[0] + nums[1]);
}

function resta(){
    let nums = obtenerNumeros();    
    mostrarResultado(nums[0] - nums[1]);
}

function multiplicacion(){
    let nums = obtenerNumeros();    
    mostrarResultado(nums[0] * nums[1]);
}

function division(){
    let nums = obtenerNumeros();    
    mostrarResultado(nums[0] / nums[1]);
}

function potencia(){
    let nums = obtenerNumeros();    
    mostrarResultado(Math.pow(nums[0], nums[1]));
}

function radicacion(){
    let nums = obtenerNumeros();    
    
    mostrarResultado(Math.sqrt(nums[1]));
}

function aleatorio(){
    let nums = obtenerNumeros();    
    let result =  nums[0] + Math.floor(Math.random() * (nums[1]+1 - nums[0]));
    mostrarResultado(result);
}

function absoluto(){
    let nums = obtenerNumeros();    
    mostrarResultado(Math.abs(nums[1]));
}

function round(){
    let resultado = document.getElementById("resultados").value;
    mostrarResultado(Math.round(+resultado));
}

function floor(){
    let resultado = document.getElementById("resultados").value;
    mostrarResultado(Math.floor(+resultado));
}

function ceil(){
    let resultado = document.getElementById("resultados").value;
    mostrarResultado(Math.ceil(+resultado))
}

function mostrarResultado(resultado){
    let resultadoInput = document.getElementById("resultados");
    console.log(resultado);
    resultadoInput.value = resultado;
}