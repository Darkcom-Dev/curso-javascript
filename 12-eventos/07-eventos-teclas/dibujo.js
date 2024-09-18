document.addEventListener("keyup", stepToDown);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var color = "blue";
var x = lienzo.canvas.width/2;
var y = lienzo.canvas.height/2;
var step = 10;
var teclas = {
    UP:38,DOWN:40,LEFT:37,RIGHT:39
};

function stepToDown(evento){

    switch(evento.keyCode)
    {
    case teclas.DOWN:
        DibujarLinea(color, x, y, x, y+step);
        y += step;
    break;
    case teclas.UP:
        DibujarLinea(color, x, y, x, y-step);
        y -= step;
    break;
    case teclas.LEFT:
        DibujarLinea(color, x, y, x-step, y);
        x -= step;
    break;
    case teclas.RIGHT:
        DibujarLinea(color, x, y, x+step, y);
        x += step;
    break;
    }
}

function DibujarLinea(color, xInicial, yInicial, xFinal, yFinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial,yInicial);
    lienzo.lineTo(xFinal,yFinal);
    lienzo.stroke();
    lienzo.closePath();
}


