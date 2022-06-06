//////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let player1vs = document.getElementById("player1vs");
let player2vs = document.getElementById("player2vs");
let player1Combate = document.getElementById("player1Combate");
let player2Combate = document.getElementById("player2Combate");
let botonListo = document.getElementById("listo");
let ganador = document.getElementById("ganador");
let textoGanador = document.getElementById("textoGanador");
let vida1 = document.getElementById("vida1");
let vida2 = document.getElementById("vida2");
let textoJugador1 = document.getElementById("textoJugador1");
let textoJugador2 = document.getElementById("textoJugador2");
let textoBarra1 = document.getElementById("textoBarra1");
let textoBarra2 = document.getElementById("textoBarra2");
let gladiadorPlayer1 = document.getElementById("gladiadorPlayer1");
let gladiadorPlayer2 = document.getElementById("gladiadorPlayer2");
let vidaPlayer1Stats = document.getElementById("vidaPlayer1Stats");
let danoPlayer1Stats = document.getElementById("danoPlayer1Stats");
let defensaPlayer1Stats = document.getElementById("defensaPlayer1Stats");
let criticoPlayer1Stats = document.getElementById("criticoPlayer1Stats");
let vidaPlayer2Stats = document.getElementById("vidaPlayer2Stats");
let danoPlayer2Stats = document.getElementById("danoPlayer2Stats");
let defensaPlayer2Stats = document.getElementById("defensaPlayer2Stats");
let criticoPlayer2Stats = document.getElementById("criticoPlayer2Stats");

let vidatotal1;
let vidatotal2;
const gravedad = 0.7;
let player1 = "";
let player2 = "";

let turnoSeleccion = 1;
let preview1;
let preview2;
let pantalla4 = false;

//////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const screenSwitch = (pantallaDestino) => {

    let destino = document.getElementById(pantallaDestino);
    destino.style.display = "flex";

    let arrayPantallas = ["pantalla1", "pantalla2", "pantalla3", "pantalla4", "pantalla5"];

    for (let pantalla of arrayPantallas) {
        if (pantalla != pantallaDestino) {
            document.getElementById(pantalla).style.display = "none";
        };
    };

    if (pantallaDestino == "pantalla4") {
        fps();
    }
    if (pantallaDestino == "pantalla5") {
        setTimeout(() => {
            botonRepetir.style.visibility = "visible";
        }, 3000);
    }
    if (pantallaDestino == "pantalla1") {
        botonRepetir.style.visibility = "hidden";
        botonListo.style.visibility = "hidden";
    }

};

//////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const preview = (seleccionado) => {

    switch (turnoSeleccion) {
        case 1:
            preview1 = allplayers[seleccionado];
            gladiadorPlayer1.src = preview1.imgPreview;
            vidaPlayer1Stats.style.width = (15 * preview1.vida) / gladiador1.vida + "em";
            danoPlayer1Stats.style.width = (15 * preview1.arma.dmg) / 140 + "em";
            defensaPlayer1Stats.style.width = (15 * preview1.armadura.reduccionDano) / 60 + "em";
            criticoPlayer1Stats.style.width = (15 * preview1.arma.critico) / 50 + "em";
            break;

        case 2:
            preview2 = allplayers[seleccionado];
            gladiadorPlayer2.src = preview2.imgPreview2;
            vidaPlayer2Stats.style.width = (15 * preview2.vida) / gladiador1.vida + "em";
            danoPlayer2Stats.style.width = (15 * preview2.arma.dmg) / 140 + "em";
            defensaPlayer2Stats.style.width = (15 * preview2.armadura.reduccionDano) / 60 + "em";
            criticoPlayer2Stats.style.width = (15 * preview2.arma.critico) / 50 + "em";
            break;

        default:
            break;
    }

};

//////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const selecciona = (seleccionado) => {

    switch (turnoSeleccion) {
        case 1:
            player1 = allplayers[seleccionado];
            console.log(player1);
            break;

        case 2:
            player2 = allplayers[seleccionado];
            console.log(player2);
            break;

        default:
            break;
    }

    turnoSeleccion++;

    if (turnoSeleccion == 3) {
        console.log("Ya hay 2 seleccionados");

        console.log(player1);
        console.log(player2);

        player1vs.src = player1.img;
        player2vs.src = player2.img;
        player1Combate.src = player1.img;
        player2Combate.src = player2.img;
        vidatotal1 = player1.vida;
        vidatotal2 = player2.vida;
        player1.posicion.x = 300;
        player1.posicion.y = 200;
        player2.posicion.x = 1100;
        player2.posicion.y = 200;

        screenSwitch('pantalla3')
        setTimeout(() => {
            botonListo.style.visibility = "visible";
        }, 1000);
        turnoSeleccion = 1;
    }

    vida1.style.width = "35em";
    vida2.style.width = "35em";
    vida1.style.backgroundColor = "green";
    vida2.style.backgroundColor = "green";
    textoBarra1.innerHTML = player1.vida;
    textoBarra2.innerHTML = player2.vida;
    textoJugador1.innerHTML = `Vida restante: ${player1.vida}`;
    textoJugador2.innerHTML = `Vida restante: ${player2.vida}`;
};