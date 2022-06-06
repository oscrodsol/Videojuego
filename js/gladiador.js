
//////////////////////////////////////////////    Constructor creacion gladiadores    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

class Gladiador{

    constructor(clase, vida, arma, escudo, armadura, img, imgPreview, imgPreview2, imgVictoria, {posicion, velocidad, sprites},linkImg) {

        this.clase = clase;
        this.vida = vida;
        this.arma = arma;
        this.escudo = escudo;
        this.armadura = armadura;
        this.img = img;
        this.imgPreview = imgPreview;
        this.imgPreview2 = imgPreview2;
        this.imgVictoria = imgVictoria;
        this.posicion = posicion;
        this.velocidad = velocidad;
        this.altura = 250;
        this.ancho = 125;
        this.hitbox = {
            posicion: this.posicion,
            ancho: 150,
            alto: 50,
        }
        this.ataca;
        this.image = new Image();
        this.sprites = sprites;
        this.image.src = linkImg;

        for (let sprite in this.sprites) {
            sprites[sprite].image = new Image();
            sprites[sprite].image.src = sprites[sprite].linkImg;
        }
    }

//////////////////////////////////////////////    Metodo que dibuja al personaje en el canvas    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    render() {
        lienzo.drawImage(this.image, this.posicion.x, this.posicion.y);
    }

//////////////////////////////////////////////    Metodo que actualiza la posicion de los personajes    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    refresco() {
        this.render();

        this.posicion.x += this.velocidad.x;
        this.posicion.y += this.velocidad.y;

        if (this.posicion.y + this.altura >= 600) {
            this.velocidad.y = 0;
        } else {
            this.velocidad.y += gravedad;
        }
    }

//////////////////////////////////////////////    Metodo que da delay a los ataques    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    ataque() {
        this.ataca = true;
        setTimeout(() => {
            this.ataca = false;
        }, 200)
        
    }
}

//////////////////////////////////////////////    Constructor armas    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

class Arma {

    constructor(nombre, dmg, critico, sangrado, rango) {
        this.nombre = nombre;
        this.dmg = dmg;
        this.critico = critico;
        this.sangrado = sangrado;
        this.rango = rango;
    }
}

//////////////////////////////////////////////    Declaracion armas    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let arma1 = new Arma("gladius", 50, 20, 0, 30);
let arma2 = new Arma("tridente", 90, 50, 70, 50);
let arma3 = new Arma("lanza", 70, 30, 40, 60);
let arma4 = new Arma("espadas", 140, 50, 20, 30);


//////////////////////////////////////////////    Declaracion escudos y armaduras    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

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

//////////////////////////////////////////////    GLADIADOR1    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let gladiador1 = new Gladiador(
    "Murmillo", 
    2000, 
    arma1, 
    escudo1, 
    armadura1, 
    "img/equipacionMurmillo.png", 
    "img/murmillo/Idle.png",
    "img/murmillo/Idle2.png", 
    "img/murmilloVictoria.png",
    {
        posicion:{x: 500,y: 200},
        velocidad:{x: 0,y: 0},
        sprites:{
            idle:{linkImg:"img/murmillo/Idle.png"},
            ataque:{linkImg:"img/murmillo/Ataque.png"},
            andar:{linkImg:"img/murmillo/Andar.png"},
            salto:{linkImg:"img/murmillo/Salto.png"},
            idle2:{linkImg:"img/murmillo/Idle2.png"},
            ataque2:{linkImg:"img/murmillo/Ataque2.png"},
            andar2:{linkImg:"img/murmillo/Andar2.png"},
            salto2:{linkImg:"img/murmillo/Salto2.png"}}
    },
    "img/murmillo/Idle.png"
);

//////////////////////////////////////////////    GLADIADOR2    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let gladiador2 = new Gladiador(
    "Retiarius", 
    1100, 
    arma2, 
    "No", 
    armadura3, 
    "img/equipacionRetiarius.png", 
    "img/retiarius/Idle.png",
    "img/retiarius/Idle2.png", 
    "img/retiariusVictoria.png",
    {
        posicion: {x: 750,y: 200},
        velocidad: {x: 0,y: 0},
        sprites:{
            idle:{linkImg:"img/retiarius/Idle.png"},
            ataque:{linkImg:"img/retiarius/Ataque.png"},
            andar:{linkImg:"img/retiarius/Andar.png"},
            salto:{linkImg:"img/retiarius/Salto.png"},
            idle2:{linkImg:"img/retiarius/Idle2.png"},
            ataque2:{linkImg:"img/retiarius/Ataque2.png"},
            andar2:{linkImg:"img/retiarius/Andar2.png"},
            salto2:{linkImg:"img/retiarius/Salto2.png"}}
    },
    "img/retiarius/Idle.png"
);

//////////////////////////////////////////////    GLADIADOR3    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let gladiador3 = new Gladiador(
    "Hoplomachus", 
    1600, 
    arma3, 
    escudo2, 
    armadura2, 
    "img/equipacionHoplomachus.png", 
    "img/hoplomachus/Idle.png",
    "img/hoplomachus/Idle2.png", 
    "img/hoplomachusVictoria.png",
    {
        posicion:{x: 500,y: 200},
        velocidad:{x: 0,y: 0},
        sprites:{
            idle:{linkImg:"img/hoplomachus/Idle.png"},
            ataque:{linkImg:"img/hoplomachus/Ataque.png"},
            andar:{linkImg:"img/hoplomachus/Andar.png"},
            salto:{linkImg:"img/hoplomachus/Salto.png"},
            idle2:{linkImg:"img/hoplomachus/Idle2.png"},
            ataque2:{linkImg:"img/hoplomachus/Ataque2.png"},
            andar2:{linkImg:"img/hoplomachus/Andar2.png"},
            salto2:{linkImg:"img/hoplomachus/Salto2.png"}}
    },
    "img/hoplomachus/Idle.png"
);

//////////////////////////////////////////////    GLADIADOR4    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let gladiador4 = new Gladiador(
    "Dimachaerus", 
    900, 
    arma4, 
    "No", 
    armadura3, 
    "img/equipacionDimachaerus.png", 
    "img/dimachaerus/Idle.png",
    "img/dimachaerus/Idle2.png", 
    "img/dimachaerusVictoria.png",
    {
        posicion: {x: 750,y: 200},
        velocidad: {x: 0,y: 0},
        sprites:{
            idle:{linkImg:"img/dimachaerus/Idle.png"},
            ataque:{linkImg:"img/dimachaerus/Ataque.png"},
            andar:{linkImg:"img/dimachaerus/Andar.png"},
            salto:{linkImg:"img/dimachaerus/Salto.png"},
            idle2:{linkImg:"img/dimachaerus/Idle2.png"},
            ataque2:{linkImg:"img/dimachaerus/Ataque2.png"},
            andar2:{linkImg:"img/dimachaerus/Andar2.png"},
            salto2:{linkImg:"img/dimachaerus/Salto2.png"}}
    },
    "img/dimachaerus/Idle.png"
);

//Diccionario de jugadores

let allplayers = {
    "1": gladiador1,
    "2": gladiador2,
    "3": gladiador3,
    "4": gladiador4
}