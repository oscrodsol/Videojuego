let juego = document.getElementById("lienzo");
let lienzo = juego.getContext("2d");

lienzo.fillStyle = "black";
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

/* refresco*/
const fps = () => {
    if (pantalla4 = true) {
        setInterval(() => {
            lienzo.fillStyle = "black";
            lienzo.fillRect(0, 0, juego.width, juego.height);
            matriz();

            if (player1.hitbox.posicion.x + player1.hitbox.ancho + 50 >= player2.posicion.x &&
                player1.hitbox.posicion.x + 50 <= player2.posicion.x + player2.ancho &&
                player1.hitbox.posicion.y + player1.hitbox.ancho >= player2.posicion.y &&
                player1.hitbox.posicion.y <= player2.posicion.y + player2.altura &&
                player1.ataca == true
            ) {
                player1.ataca = false;
                console.log("hola");
            }

            if (player2.hitbox.posicion.x + player2.hitbox.ancho + 50 >= player1.posicion.x &&
                player2.hitbox.posicion.x + 50 <= player1.posicion.x + player1.ancho &&
                player2.hitbox.posicion.y + player2.hitbox.ancho >= player1.posicion.y &&
                player2.hitbox.posicion.y <= player1.posicion.y + player1.altura &&
                player2.ataca == true
            ) {
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
            player1.velocidad.x = 5;
            break
        case 'a':
            player1.velocidad.x = -5;
            break
        case 'w':
            player1.velocidad.y = -10;
            break
        case ' ':
            player1.ataque()
            break
        case '6':
            player2.velocidad.x = 5;
            break
        case '4':
            player2.velocidad.x = -5;
            break
        case '8':
            player2.velocidad.y = -10;
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