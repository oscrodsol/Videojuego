const screenSwitch = (pantallaDestino) => {

    let destino = document.getElementById(pantallaDestino);
    destino.style.display = "flex";

    let arrayPantallas = ["pantalla1", "pantalla2", "pantalla3", "pantalla4", "pantalla5"];

    for (let pantalla of arrayPantallas) {
        if (pantalla != pantallaDestino) {
            document.getElementById(pantalla).style.display = "none";
        };
    };

};

let player1vs = document.getElementById("player1vs");
let player2vs = document.getElementById("player2vs");
let botonListo = document.getElementById("listo");
let combate;


console.log(player1vs);

let player1 = "";
let player2 = "";

let turnoSeleccion = 1;

const selecciona = (seleccionado) => {


    switch (turnoSeleccion) {
        case 1:
            player1 = allplayers[seleccionado];
            break;

        case 2:
            player2 = allplayers[seleccionado];
            break;

        default:
            console.log("Ya están todos seleccionados....");
            break;
    }

    turnoSeleccion++;

    if (turnoSeleccion == 3) {
        console.log("Ya hay 2 seleccionados");

        console.log(player1);
        console.log(player2);

        player1vs.src = player1.img;
        player2vs.src = player2.img;

        console.log(player2.clase, player2.arma);
        screenSwitch('pantalla3')


        setTimeout(() => {
            botonListo.style.display = "block";
        }, 2000);
        combate = true;
        turnoSeleccion = 1;
    }
};


console.log(player2.vida);