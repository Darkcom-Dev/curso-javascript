// JavaScript source code

var route = window.location;
let date = new Date();
console.log(console);
document.write("<h1>Document Object Model</h1><br>");
document.write("<p><b>No verás el contenido a menos que tengas el javascript con el nombre correcto.<b><br>Estamos acostumbrados a que creamos una página estática, pero necesitamos escribir información dinámica usando JavaScript, pero ¿como hacemos eso?</p>");
document.write("<p><em>Para hacerlo debes estudiar el archivo <u>dom.js</u></em>, un ejemplo de algo dinámico es la siguiente linea donde ves la ruta de este archivo y la fecha actual</p>")
document.write("<h3><b>Estás en: </b>" + route + "</h3>");
document.write("<h3><b>La fecha actual es: </b>" + date.getDate() + " de " + date.getMonth() + " de " + date.getFullYear() + "</h3>");
document.write("<p>Esto demuestra que JavaScript es capaz de manipular archivos HTML.<br> Un documento HTML no es mas que un esqueleto o estructura para escribir un documento, donde la parte visual esta controlada por un documento CSS y los datos por JavaScript</p>");