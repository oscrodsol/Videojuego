
vidatotal1 = player1.vida;
vidatotal2 = player2.vida;

const ataque1 = () => {
vidatotal2 = vidatotal2 - (player1.arma.dano);
console.log(vidatotal2);
}
const ataque2 = () => {
vidatotal1 = vidatotal1 - (player2.arma.dano);
console.log(vidatotal1);
}
