for (let loops = 5; loops <= 10; loops += 1) { //for (let (variable) = valor inicial; condicion; instruccion de iteracion)
    console.log(loops) //print en consola del 5 al 10
  }

  for (let counter = 3; counter >= 0; counter--){ //loop en reversa.
    console.log(counter);
  }
  
//loop un array

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++) { //como el array tiene mas datos que 0, imprimira todos los valores.
  console.log('I would love to visit ' + vacationSpots[i])
}

let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

// aqui un nested loop o mejor dicho, un loop dentro de un loop que revisa si ambos arrays tienen algun valor similar y lo agrega a mutualFriends-
for (let i = 0; i < bobsFollowers.length; i++) { 
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

// un while loop

const cards = ['diamond', 'spade', 'heart', 'club']; //el array

let currentCard; //variable
while (currentCard !== 'spade') { // Si la variable no es igual a 'spade' seguira haciendo log.
  currentCard = cards[Math.floor(Math.random() * 4)]; //crean un numero aleatorio que se asigna a uno de los arrays.
  console.log(currentCard)
}

//Do while loop

let cupsOfSugarNeeded = 3;//variable
let cupsAdded = 0;//variable

do { //do {
 cupsAdded++ //incrementa la variable
 console.log(cupsAdded + ' cup was added') //log a la consola
} while (cupsAdded < cupsOfSugarNeeded); //condicional de detencion.


//break keyword

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  if (rapperArray[i] === "Notorious B.I.G.") {
  break;
    }
    console.log("And if you don't know, now you know." + rapperArray[i])
}