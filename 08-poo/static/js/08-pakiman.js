class Pakiman {
    constructor(name, life, attack, url, speak) {
        this.name = name;
        this.life = life;
        this.attack = attack;
        this.speak = speak;
        this.image = new Image();

        this.image.src = url;
    }

    func() {
        document.write(this.speak);
    }
    draw() {
        document.body.appendChild(this.image);
        var button = document.createElement("button");
        button.innerHTML = "Hablar";
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button);
        button.addEventListener("click", this.func);
        document.write("<p>" + this.name + " <br>vida: " + this.life + " <br>ataque: " + this.attack + "</p><hr>");
    }
}

var collection = [];
collection.push( new Pakiman("cauchin", 100, 30, "vaca.webp", "cau cau"));
collection.push( new Pakiman("pokacho", 80, 50, "pollo.webp", "poka poka"));
collection.push( new Pakiman("tocinauro", 120, 40, "cerdo.webp", "nao nao"));

for (var paki of collection) {
    paki.draw();
}