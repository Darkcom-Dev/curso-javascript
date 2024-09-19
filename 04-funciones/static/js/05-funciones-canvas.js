var txt = document.getElementById("txtLines");
var btn = document.getElementById("button");
btn.addEventListener("click", Draw);
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

function DibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function Draw() {
    var w = lienzo.canvas.width, h = lienzo.canvas.height;
    var count = parseInt(txt.value);
    var wStep = w / count, hStep = h / count;

    for (var i = 0; i < count; i++) {
        DibujarLinea("blue", 0, wStep * i + 10, hStep * i + 10, h);
        DibujarLinea("pink", w, h - wStep * i + 10, w - hStep * i + 10, 0);
    }
    DibujarLinea("blue", 1, 1, 1, h);
    DibujarLinea("blue", 1, 1, w, 1);
    DibujarLinea("blue", 1, h - 1, w - 1, h - 1);
    DibujarLinea("blue", w - 1, 1, w - 1, h - 1);
}
