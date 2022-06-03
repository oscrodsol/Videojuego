let juego = document.getElementById("lienzo");
let lienzo = juego.getContext("2d");

lienzo.fillRect(0, 0, juego.width, juego.height);


const matriz = () => {

    for (var x = 0; x < juego.width; x += 10) {
        lienzo.strokeStyle = "green";
        lienzo.fillStyle = "green";
        lienzo.beginPath();
        lienzo.moveTo(x, 0);
        lienzo.lineTo(x, juego.height);
        lienzo.lineWidth = (x % 50 == 0) ? 2 : 1;

        if (x % 50 == 0) { lienzo.fillText(x, x, 10); }
        lienzo.stroke();
    }
    for (var y = 0; y < juego.height; y += 10) {
        lienzo.strokeStyle = "green";
        lienzo.fillStyle = "green";
        lienzo.beginPath();
        lienzo.moveTo(0, y);
        lienzo.lineTo(juego.width, y);
        lienzo.lineWidth = (y % 50 == 0) ? 2 : 1;

        if (y % 50 == 0) { lienzo.fillText(y, 0, y + 10); }
        lienzo.stroke();
    }

    lienzo.stroke();

    lienzo.beginPath();
    lienzo.strokeStyle = "#FFFFFF";
    lienzo.fillStyle = "#00FF00";
    lienzo.lineWidth = 2;
    lienzo.moveTo(50, 50);
    lienzo.lineTo(150, 250);
    lienzo.lineTo(250, 170);
    lienzo.lineTo(500, 600);
    lienzo.lineTo(100, 450);
    lienzo.lineTo(150, 50);
    lienzo.lineTo(300, 50);
    lienzo.stroke();
    lienzo.fillText("(50, 50)", 30, 40);
    lienzo.fillText("(150, 250)", 130, 260);
    lienzo.fillText("(250, 170)", 255, 175);
    lienzo.fillText("(500, 600)", 480, 610);
    lienzo.fillText("(100, 450)", 105, 445);
    lienzo.fillText("(150, 50)", 130, 40);
    lienzo.fillText("(300, 50)", 280, 40);
    lienzo.fill();
    lienzo.strokeStyle = "blue";
    lienzo.fillStyle = "lightblue";
    lienzo.beginPath();
    lienzo.moveTo(600, 200);
    lienzo.lineTo(270, 360);
    lienzo.lineTo(270, 310);
    lienzo.closePath();
    lienzo.stroke();
    lienzo.fill();
}

const gravedad = 0.5;

class Jugador {
    constructor({ posicion, velocidad,}) {
        this.posicion = posicion;
        this.velocidad = velocidad;
        this.altura = 150;
        this.ancho = 100;
        this.hitbox = {
            posicion: this.posicion,
            ancho: 150,
            alto: 50,
        }
    }

    render() {
        lienzo.fillStyle = "yellowgreen";
        lienzo.fillRect(this.posicion.x, this.posicion.y, 100, this.altura);
        lienzo.strokeStyle = "green";
        lienzo.strokeRect(this.posicion.x, this.posicion.y, 100, this.altura);
        lienzo.fillStyle = "brown";
        lienzo.fillRect(this.hitbox.posicion.x + 50, this.hitbox.posicion.y + 50, this.hitbox.ancho, this.hitbox.alto);
        lienzo.strokeStyle = "red";
        lienzo.strokeRect(this.hitbox.posicion.x + 50, this.hitbox.posicion.y + 50, this.hitbox.ancho, this.hitbox.alto);
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
}

const jugador1 = new Jugador({
    posicion: {
        x: 500,
        y: 300
    },
    velocidad: {
        x: 0,
        y: 0
    }
});

console.log(jugador1);

const jugador2 = new Jugador({
    posicion: {
        x: 750,
        y: 300
    },
    velocidad: {
        x: 0,
        y: 0
    }
});

console.log(jugador2);

/* refresco*/
setInterval(() => {
    lienzo.fillStyle = "black";
    lienzo.fillRect(0, 0, juego.width, juego.height);
    matriz();
    if (jugador1.hitbox.posicion.x + jugador1.hitbox.ancho + 50 >= jugador2.posicion.x &&
        jugador1.hitbox.posicion.x + 50 <= jugador2.posicion.x + jugador2.ancho &&
        jugador1.hitbox.posicion.y + jugador1.hitbox.ancho >= jugador2.posicion.y &&
        jugador1.hitbox.posicion.y <= jugador2.posicion.y + jugador2.altura
        ) {
        console.log("hola");
    }
    jugador1.refresco();
    jugador2.refresco();
/*     console.log("jejejeje") */
}, 1000 / 60);

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case 'd':
            jugador1.velocidad.x = 5;
            break
        case 'a':
            jugador1.velocidad.x = -5;
            break
        case 'w':
            jugador1.velocidad.y = -10;
            break
        case '6':
            jugador2.velocidad.x = 5;
            break
        case '4':
            jugador2.velocidad.x = -5;
            break
        case '8':
            jugador2.velocidad.y = -10;
            break
        default:
            break;
    }
});

window.addEventListener("keyup", (event) => {
    switch (event.key) {
        case 'd':
            jugador1.velocidad.x = 0;
            break
        case 'a':
            jugador1.velocidad.x = 0;
            break
        case '6':
            jugador2.velocidad.x = 0;
            break
        case '4':
            jugador2.velocidad.x = 0;
            break
        default:
            break;
    }
});

