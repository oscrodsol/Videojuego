let vidatotal1;
let vidatotal2;

class Gladiador {

    constructor(clase, vida, arma, escudo, armadura, img) {
        this.clase = clase;
        this.vida = vida;
        this.arma = arma;
        this.escudo = escudo;
        this.armadura = armadura;
        this.img = img;
    }
}


class Arma {

    constructor(nombre, dano, critico, sangrado, rango) {
        this.nombre = nombre;
        this.dano = dano;
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

let gladiador1 = new Gladiador("Murmillo", 500, arma1, escudo1, armadura1, "img/gladius.png");
let gladiador2 = new Gladiador("Retiarius", 500, arma2, "No", armadura2, "img/tridente.png");
let gladiador3 = new Gladiador("Hoplomachus", 500, arma3, escudo2, armadura2, "img/lanza.png");
let gladiador4 = new Gladiador("Dimachaerus", 500, arma4, "No", armadura3, "img/duales.png");

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