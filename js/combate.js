
const ataque1 = () => {
    vidatotal2 = vidatotal2 - player1.arma.dmg;
    console.log(vidatotal2);
    if (vidatotal2 <= 0){
        ganador.src = player1.img;
        textoGanador.innerHTML = `El ganador es el jugador1 con la clase ${player1.clase}`;
        screenSwitch('pantalla5');
    }
    return vidatotal2;
}
const ataque2 = () => {
    vidatotal1 = vidatotal1 - player2.arma.dmg;
    console.log(vidatotal1);
    if (vidatotal1 <= 0){
        ganador.src = player2.img;
        textoGanador.innerHTML = `El ganador es el jugador2 con la clase ${player2.clase}`;
        screenSwitch('pantalla5');
    }
    return vidatotal1;
}
