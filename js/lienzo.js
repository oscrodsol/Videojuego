let juego = document.getElementById("lienzo");
let lienzo = juego.getContext("2d");

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
}

/* refresco*/
const fps = () => {
    if (pantalla4 = true) {
        setInterval(() => {
            fondo.refresco();
            /* matriz(); */
            /* murmilloImg.render(); */
            if (player1.posicion.y + player1.altura >= 600) {
                player1.posicion.y = 600 - player1.altura;
            }
            if (player2.posicion.y + player2.altura >= 600) {
                player2.posicion.y = 600 - player2.altura;
            }
            if (player1.ataca == true) {
                player1.image = player1.sprites.ataque.image
            }else if(player1.ataca == false){
                player1.image = player1.sprites.idle.image
            }
            if (player1.hitbox.posicion.x + player1.hitbox.ancho + 50 >= player2.posicion.x &&
                player1.hitbox.posicion.x + 50 <= player2.posicion.x + player2.ancho &&
                player1.hitbox.posicion.y + player1.hitbox.ancho >= player2.posicion.y &&
                player1.hitbox.posicion.y <= player2.posicion.y + player2.altura &&
                player1.ataca == true
            ) {
                ataque1();
                player1.ataca = false;
                console.log("hola");
            }

            if (player2.hitbox.posicion.x + player2.hitbox.ancho + 50 >= player1.posicion.x &&
                player2.hitbox.posicion.x + 50 <= player1.posicion.x + player1.ancho &&
                player2.hitbox.posicion.y + player2.hitbox.ancho >= player1.posicion.y &&
                player2.hitbox.posicion.y <= player1.posicion.y + player1.altura &&
                player2.ataca == true
            ) {
                ataque2();
                player2.ataca = false;
                console.log("hola");
            }

            player1.refresco();
            player2.refresco();
            /*     console.log("jejejeje") */
        }, 1000 / 60);
    }
}

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case 'd':
            player1.velocidad.x = 8;
            break
        case 'a':
            player1.velocidad.x = -8;
            break
        case 'w':
            if (player1.posicion.y + player1.altura >= 600) {
                player1.velocidad.y = -12;
            }
            break
        case ' ':
            player1.ataque()
            break
        case '6':
            player2.velocidad.x = 8;
            break
        case '4':
            player2.velocidad.x = -8;
            break
        case '8':
            if (player2.posicion.y + player2.altura >= 600) {
                player2.velocidad.y = -12;
            }
            break
        case '0':
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
            break
        case 'a':
            player1.velocidad.x = 0;
            break
        case '6':
            player2.velocidad.x = 0;
            break
        case '4':
            player2.velocidad.x = 0;
            break
        default:
            break;
    }
});