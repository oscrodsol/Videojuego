/* class Persona {

    constructor(nombre,edad,dni,genero,caracter,fechaNacimiento,skillsJs){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.genero = genero;
        this.caracter = caracter;
        this.fechaNacimiento = fechaNacimiento;
        this.skillsJs = skillsJs;

        this.sueño = true;
        this.hambre = true;
        this.dinero = 10000;
        this.motivacion = 1000;

    };

    dormir(){

        if(this.sueño == true){
            this.sueño == false;
            this.motivacion += 100;
        };

    };

    despertar(){

        
        this.sueño = false;
        
    }

    programar(){

        if(this.sueño != true){
            this.skillsJs = this.skillsJs + 100; 
        }else{
            console.log("Vete a dormir");
        }

    };

};
 */

class Gladiador {

    constructor(clase, vida, arma, escudo, armadura){
        this.clase = clase;
        this.vida = vida;
        this.arma = arma;
        this.escudo = escudo;
        this.armadura = armadura;
    }

    ataque1 = (player1,player2) =>{
        
    }

    ataque2 = () => {

    }

}

class Arma {

    constructor(nombre,dano,critico,sangrado,rango){
        this.nombre = nombre;
        this.dano = dano;
        this.critico = critico;
        this.sangrado = sangrado;
        this.rango = rango;
    }
}

let arma1 = new Arma("gladius",50,20,0,30);
let arma2 = new Arma("tridente",90,50,70,50);
let arma3 = new Arma("lanza",70,30,40,60);
let arma4 = new Arma("espadas",70,50,20,30);


let escudo1 = {
    nombre: "Escudo Grande",
    probabParada: 80
}

let escudo2 = {
    nombre: "Escudo Pequeño",
    probabParada: 30
}

let armadura1 = {
    nombre: "Armadura Pesada",
    reduccionDano: 60
}

let armadura2 = {
    nombre: "Armadura Media",
    reduccionDano: 30
}

let armadura3 = {
    nombre: "Armadura Ligera",
    reduccionDano: 10
}

let gladiador1 = new Gladiador("Murmillo",500,arma1,escudo1,armadura1);
let gladiador2 = new Gladiador("Retiarius",500,arma2,"No",armadura2);
let gladiador3 = new Gladiador("Hoplomachus",500,arma3,escudo2,armadura2);
let gladiador4 = new Gladiador("Dimachaerus",500,arma4,"No",armadura3);

console.log(gladiador1);
console.log(gladiador2);
console.log(gladiador3);
console.log(gladiador4);

//Instanciar

/* let persona1 = new Persona("Coche rojo",24,"12345678A","M","Tranquilo","04/08/1997",2000);
let persona2 = new Persona("Coche Azul",28,"12345678B","M","Alegre","07/02/1994",2100);
let persona3 = new Persona("Coche Amarillo",47,"87654321C","F","Curiosa","22/08/1974",2200);
let persona4 = new Persona("Coche Multicolor",36,"12345678F","M","Contrario","30/07/1986",1900);
 */
//Diccionario de JS

let allplayers = {
    "1": gladiador1,
    "2": gladiador2,
    "3": gladiador3,
    "4": gladiador4
}