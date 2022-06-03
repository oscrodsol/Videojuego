
class Gladiador {

    constructor(clase, vida, arma, escudo, armadura, img, {posicion, velocidad}) {
        this.clase = clase;
        this.vida = vida;
        this.arma = arma;
        this.escudo = escudo;
        this.armadura = armadura;
        this.img = img;
        this.posicion = posicion;
        this.velocidad = velocidad;
        this.altura = 150;
        this.ancho = 100;
        this.hitbox = {
            posicion: this.posicion,
            ancho: 150,
            alto: 50,
        }
        this.ataca
    }

    render() {
        lienzo.fillStyle = "yellowgreen";
        lienzo.fillRect(this.posicion.x, this.posicion.y, 100, this.altura);
        lienzo.strokeStyle = "green";
        lienzo.strokeRect(this.posicion.x, this.posicion.y, 100, this.altura);
        
        if (player1.ataca == true) {
            lienzo.fillStyle = "brown";
            lienzo.fillRect(player1.hitbox.posicion.x + 50, player1.hitbox.posicion.y + 50, player1.hitbox.ancho, player1.hitbox.alto);
            lienzo.strokeStyle = "red";
            lienzo.strokeRect(player1.hitbox.posicion.x + 50, player1.hitbox.posicion.y + 50, player1.hitbox.ancho, player1.hitbox.alto);
        }
        if (player2.ataca == true) {
            lienzo.fillStyle = "brown";
            lienzo.fillRect(player2.hitbox.posicion.x + 50, player2.hitbox.posicion.y + 50, player2.hitbox.ancho, player2.hitbox.alto);
            lienzo.strokeStyle = "red";
            lienzo.strokeRect(player2.hitbox.posicion.x + 50, player2.hitbox.posicion.y + 50, player2.hitbox.ancho, player2.hitbox.alto);
        }
    }

    refresco() {
        this.render();

        this.posicion.x += this.velocidad.x;
        this.posicion.y += this.velocidad.y;

        if (this.posicion.y + this.altura >= juego.height) {
            this.velocidad.y = 0;
        } else {
            this.velocidad.y += gravedad;
        }
    }

    ataque() {
        this.ataca = true;
        setTimeout(() => {
            this.ataca = false;
        }, 100)
    }
}


class Arma {

    constructor(nombre, dmg, critico, sangrado, rango) {
        this.nombre = nombre;
        this.dmg = dmg;
        this.critico = critico;
        this.sangrado = sangrado;
        this.rango = rango;
    }
}

let arma1 = new Arma("gladius", 50, 20, 0, 30);
let arma2 = new Arma("tridente", 90, 50, 70, 50);
let arma3 = new Arma("lanza", 70, 30, 40, 60);
let arma4 = new Arma("espadas", 70, 50, 20, 30);


let escudo1 = {
    nombre: "Escudo Grande",
    probabParada: 80
}

let escudo2 = {
    nombre: "Escudo Pequeño",
    probabParada: 30
}

let armadura1 = {
    nombre: "Armadura Pesada",
    reduccionDano: 60
}

let armadura2 = {
    nombre: "Armadura Media",
    reduccionDano: 30
}

let armadura3 = {
    nombre: "Armadura Ligera",
    reduccionDano: 10
}

let gladiador1 = new Gladiador("Murmillo", 1200, arma1, escudo1, armadura1, "img/gladius.png", {posicion:{x: 500,y: 300},velocidad:{x: 0,y: 0}});
let gladiador2 = new Gladiador("Retiarius", 1200, arma2, "No", armadura2, "img/tridente.png", {posicion: {x: 750,y: 300},velocidad: {x: 0,y: 0}});
let gladiador3 = new Gladiador("Hoplomachus", 1200, arma3, escudo2, armadura2, "img/lanza.png", {posicion:{x: 500,y: 300},velocidad:{x: 0,y: 0}});
let gladiador4 = new Gladiador("Dimachaerus", 1200, arma4, "No", armadura3, "img/duales.png", {posicion: {x: 750,y: 300},velocidad: {x: 0,y: 0}});

console.log(gladiador1);
console.log(gladiador2);
console.log(gladiador3);
console.log(gladiador4);

let allplayers = {
    "1": gladiador1,
    "2": gladiador2,
    "3": gladiador3,
    "4": gladiador4
}