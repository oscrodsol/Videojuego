
//////////////////////////////////////////////    Declaracion del elemento canvas    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let juego = document.getElementById("lienzo");
let lienzo = juego.getContext("2d");

/////////////////////////////////////////    Constructor que solo sirve para declarar e inicializar el fondo del juego    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

class Sprite {
    constructor({posicion, linkImg}) {
        this.posicion = posicion;
        this.alto = 150;
        this.ancho = 100;
        this.image = new Image();
        this.image.src = linkImg;
    }
    render() {
        lienzo.drawImage(this.image, this.posicion.x, this.posicion.y)
    }

    refresco() {
        this.render();
    }
}

let fondo = new Sprite({
    posicion: {
        x: 0,
        y: 0
    },
    linkImg: "img/coliseo.png"
})

//////////    Este metodo sirve por si hay algun problema en el juego con las hitbox y colocacion de objetos en el canvas, es una matriz   \\\\\\\\\\

/* const matriz = () => {

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
} */

/////////////////////    Inicia el videojuego como tal, deine la tasa de refresco y dibuja las imagenes   \\\\\\\\\\\\\\\\\\\\\\\\
const fps = () => {
    if (pantalla4 = true) {
        setInterval(() => {
            fondo.refresco();
            /* matriz(); */

            //Si los jugadores caen por debajo del limite del suelo los llevan de nuevo a sus limites
            if (player1.posicion.y + player1.altura >= 600) {
                player1.posicion.y = 600 - player1.altura;
            }
            if (player2.posicion.y + player2.altura >= 600) {
                player2.posicion.y = 600 - player2.altura;
            }

            //Estos 4 if's sirven para que los jugadores no atraviesen los limites de la pantalla

            if (player1.posicion.x <= 0) {
                player1.posicion.x = 0;
                player1.image = player1.sprites.idle.image;
            }
            if (player2.posicion.x <= 0) {
                player2.posicion.x = 0;
                player2.image = player2.sprites.idle2.image;
            }

            if (player1.posicion.x + player1.ancho>= juego.width) {
                player1.posicion.x = juego.width - player1.ancho;
                player1.image = player1.sprites.idle.image;
            }
            if (player2.posicion.x + player2.ancho + 125>= juego.width) {
                player2.posicion.x = juego.width - player2.ancho - 125;
                player2.image = player2.sprites.idle2.image;
            }

            //Comprueba que la hitbox del arma de los jugadores estan dentro de la hitbox del adversario, si lo est??, lanza el metodo ataque

            if (player1.hitbox.posicion.x + player1.hitbox.ancho + 50 >= player2.posicion.x + 100 &&
                player1.hitbox.posicion.x + 50 <= player2.posicion.x + 100 + player2.ancho &&
                player1.hitbox.posicion.y + player1.hitbox.ancho >= player2.posicion.y &&
                player1.hitbox.posicion.y <= player2.posicion.y + player2.altura &&
                player1.ataca == true
            ) {
                ataque1();
                player1.ataca = false;
            }

            if (player2.hitbox.posicion.x + player2.hitbox.ancho >= player1.posicion.x &&
                player2.hitbox.posicion.x <= player1.posicion.x + player1.ancho &&
                player2.hitbox.posicion.y + player2.hitbox.ancho >= player1.posicion.y &&
                player2.hitbox.posicion.y <= player1.posicion.y + player1.altura &&
                player2.ataca == true
            ) {
                ataque2();
                player2.ataca = false;
                console.log("hola");
            }

            //Dibuja a los jugadores en la pantalla

            player1.refresco();
            player2.refresco();
        }, 1000 / 60);
    }
}

/////////// Asignacion de teclas de los jugadores con sus respectivos sprites \\\\\\\\\\\\

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case 'd':
            player1.velocidad.x = 8;
            player1.image = player1.sprites.andar.image;
            break
        case 'a':
            player1.velocidad.x = -8;
            player1.image = player1.sprites.andar.image;
            break
        case 'w':
            if (player1.posicion.y + player1.altura >= 600) {
                player1.velocidad.y = -15;
                player1.image = player1.sprites.salto.image;
            }
            break
        case ' ':
            player1.image = player1.sprites.ataque.image;
            setTimeout(() => {
                player1.image = player1.sprites.idle.image;
            }, 200)
            player1.ataque()
            break
        case '6':
            player2.velocidad.x = 8;
            player2.image = player2.sprites.andar2.image;
            break
        case '4':
            player2.velocidad.x = -8;
            player2.image = player2.sprites.andar2.image;
            break
        case '8':
            if (player2.posicion.y + player2.altura >= 600) {
                player2.velocidad.y = -15;
                player2.image = player2.sprites.salto2.image;
            }
            break
        case '0':
            player2.image = player2.sprites.ataque2.image;
            setTimeout(() => {
                player2.image = player2.sprites.idle2.image;
            }, 200)
            player2.ataque()
            break
        default:
            break;
    }
});

window.addEventListener("keyup", (event) => {
    switch (event.key) {
        case 'd':
            player1.velocidad.x = 0;
            player1.image = player1.sprites.idle.image
            break
        case 'a':
            player1.velocidad.x = 0;
            player1.image = player1.sprites.idle.image
            break
        case '6':
            player2.velocidad.x = 0;
            player2.image = player2.sprites.idle2.image
            break
        case '4':
            player2.velocidad.x = 0;
            player2.image = player2.sprites.idle2.image
            break
        default:
            break;
    }
});