////    Metodo que determina si es critico o no, el daño que hace el jugador 1, si gana el jugador 1 y la longitud de la barra de vida del jugador 2    \\\\

let critico = 0;
const ataque1 = () => {
    if (Math.floor(Math.random() * 100) <= player1.arma.critico) {
        critico = player1.arma.dmg;
        console.log("Critico!");
    }
    vidatotal2 = vidatotal2 - (player1.arma.dmg + critico);

    if (critico > 0) {
        textoJugador2.innerHTML = `Critico! -${(player1.arma.dmg) * 2}`
    } else {
        textoJugador2.innerHTML = `Vida -${player1.arma.dmg}`
    }
    critico = 0;

    vida2.style.width = (35 * vidatotal2) / player2.vida + "em";
    if (vidatotal2 <= player2.vida/5 && player2.vida/2) {
        vida2.style.backgroundColor = "red";
    } else if (vidatotal2 <= player2.vida/2) {
        vida2.style.backgroundColor = "yellow";
    } else{
        vida2.style.backgroundColor = "green";
    } 

    textoBarra2.innerHTML = vidatotal2;

    console.log("Vida jugador 2: " + vidatotal2);

    if (vidatotal2 <= 0) {
        ganador.src = player1.imgVictoria;
        textoGanador.innerHTML = `El ganador es el jugador 1 con la clase ${player1.clase}`;
        screenSwitch('pantalla5');
    }
}

////    Metodo que determina si es critico o no, el daño que hace el jugador 2, si gana el jugador 2 y la longitud de la barra de vida del jugador 1    \\\\

const ataque2 = () => {
    if (Math.floor(Math.random() * 100) <= player2.arma.critico) {
        critico = player2.arma.dmg;
        console.log("Critico!");
    }
    vidatotal1 = vidatotal1 - (player2.arma.dmg + critico);
    if (critico > 0) {
        textoJugador1.innerHTML = `Critico! -${(player2.arma.dmg) * 2}`
    } else {
        textoJugador1.innerHTML = `Vida -${player2.arma.dmg}`
    }

    critico = 0;

    vida1.style.width = (35 * vidatotal1) / player1.vida + "em";
    if (vidatotal1 <= player1.vida/5 && player1.vida/2) {
        vida1.style.backgroundColor = "red";
    } else if (vidatotal1 <= player1.vida/2) {
        vida1.style.backgroundColor = "yellow";
    } else{
        vida1.style.backgroundColor = "green";
    } 

    textoBarra1.innerHTML = vidatotal1;

    console.log("Vida jugador 1: " + vidatotal1);

    if (vidatotal1 <= 0) {
        ganador.src = player2.imgVictoria;
        textoGanador.innerHTML = `El ganador es el jugador 2 con la clase ${player2.clase}`;
        screenSwitch('pantalla5');
    }
}