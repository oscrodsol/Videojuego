const screenSwitch = (pantallaDestino) => {

    // let actual = document.getElementById(pantallaActual);
    let destino = document.getElementById(pantallaDestino);
    destino.style.display = "flex";
    // actual.style.display = "none";
    
    // if(numeroPantalla == "pantalla2"){
    //     document.getElementById("pantalla1").style.display = "none";
    //     destino.style.display = "block";
    // } else {
    //     document.getElementById("pantalla2").style.display = "none";
    //     destino.style.display = "block";
    // };

    let arrayPantallas = ["pantalla1","pantalla2","pantalla3","pantalla4","pantalla5"];

    for(let pantalla of arrayPantallas){
        if(pantalla != pantallaDestino){
            document.getElementById(pantalla).style.display = "none";
        };
    };
   
};

let player1 = "";
let player2 = "";
let player3 = "";
let player4 = "";

let turnoSeleccion = 1;

const selecciona = (seleccionado) => {

    
    switch(turnoSeleccion) {
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

    if(turnoSeleccion == 3){
        console.log("Ya hay 2 seleccionados");

        console.log(player1);
        console.log(player2);

        player1.despertar();

        player1.programar();
       
        console.log(player2.clase,player2.arma);
        screenSwitch('pantalla3')
        turnoSeleccion = 0;
    }
    
};