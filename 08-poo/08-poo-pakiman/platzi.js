function randomInt(min, max) {
    var base = max - min + 1;
    return Math.floor(Math.random() * base) + min;
}

function draw() {
    if (background.isLoaded) canvas.drawImage(background.img, 0, 0);
    if (cow.isLoaded) canvas.drawImage(cow.sprite, cow.posX, cow.posY);
    if (pig.isLoaded) canvas.drawImage(pig.sprite, pig.posX, pig.posY);
    if (chicken.isLoaded) canvas.drawImage(chicken.sprite, chicken.posX, chicken.posY);
}

function loadBackground() {
    background.isLoaded = true;
    draw();
}

function loadCow() {
    cow.isLoaded = true;
    draw();
}

function drawPig() {
    pig.isLoaded = true;
    draw();
}

function drawChicken() {
    chicken.isLoaded = true;
    draw();
}

function move(evento) {
    switch (evento.keyCode) {
        case key.UP:
            chicken.posY -= step;
            break;
        case key.DOWN:
            chicken.posY += step;
            break;
        case key.LEFT:
            chicken.posX -= step;
            break;
        case key.RIGHT:
            chicken.posX += step;
            break;
    }

    pig.posX += randomInt(-10, 10);
    pig.posY += randomInt(-10, 10);

    cow.posX += randomInt(-5, 5);
    cow.posY += randomInt(-5, 5);

    draw()
}

var screen = document.getElementById("screen");
var canvas = screen.getContext("2d");
document.addEventListener("keyup", move);

var key = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var step = 5;

var background = {
    url: "tile.webp",
    isLoaded : false
};
background.img = new Image();
background.img.src = background.url;
background.img.addEventListener("load", loadBackground);

var cow = {
    url: "vaca.webp",
    isLoaded : false,
    posX: randomInt(80, 420),
    posY: randomInt(80, 420)
};
cow.sprite = new Image();
cow.sprite.src = cow.url;
cow.sprite.addEventListener("load",loadCow);

var pig = {
    url: "cerdo.webp",
    isLoaded : false,
    posX: randomInt(80, 420),
    posY: randomInt(80, 420)
};
pig.sprite = new Image();
pig.sprite.src = pig.url;
pig.sprite.addEventListener("load", drawPig);

var chicken = {
    url: "pollo.webp",
    isLoaded : false,
    posX: 250,
    posY: 250
};
chicken.sprite = new Image();
chicken.sprite.src = chicken.url;
chicken.sprite.addEventListener("load", drawChicken);

