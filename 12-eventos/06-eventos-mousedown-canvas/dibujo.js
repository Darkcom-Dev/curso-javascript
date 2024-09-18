document.addEventListener("keyup", keyDraw);

var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var eraseBtn = document.getElementById("erase");
eraseBtn.addEventListener("click",eraseAll);

var d = document.getElementById("dibujito");
d.addEventListener("mouseup", isDrawing);//limita el listener a solo el canvas
d.addEventListener("mousedown", isDrawing);//limita el listener al canvas
d.addEventListener("mousemove", mouseDraw);
var lienzo = d.getContext("2d");
var x = lienzo.canvas.width/2;
var y = lienzo.canvas.height/2;
var lastX;
var lastY;
var drawing;
var step = 10;
var teclas = {
    UP:38,DOWN:40,LEFT:37,RIGHT:39
};

function eraseAll()
{
    lienzo.clearRect(0,0,d.width,d.height);
}

function isDrawing(evento){
    drawing = evento.type == "mousedown";
}

function mouseDraw(evento)
{
    var _x = evento.layerX;
    var _y = evento.layerY;
   
    if (drawing) drawLine(color2.value, lastX, lastY, _x, _y);
    
    lastX = evento.layerX;
    lastY = evento.layerY;

}

function keyDraw(evento){

    switch(evento.keyCode)
    {
    case teclas.DOWN:
        drawLine(color1.value, x, y, x, y+step);
        y += step;
    break;
    case teclas.UP:
        drawLine(color1.value, x, y, x, y-step);
        y -= step;
    break;
    case teclas.LEFT:
        drawLine(color1.value, x, y, x-step, y);
        x -= step;
    break;
    case teclas.RIGHT:
        drawLine(color1.value, x, y, x+step, y);
        x += step;
    break;
    }
}

function drawLine(color, xInicial, yInicial, xFinal, yFinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial,yInicial);
    lienzo.lineTo(xFinal,yFinal);
    lienzo.stroke();
    lienzo.closePath();
}


