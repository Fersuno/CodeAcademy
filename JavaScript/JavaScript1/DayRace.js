let raceNumber = Math.floor(Math.random() * 1000);
let early = false; //Aqui coloca si te registraste antes de las 9:30
let age = 18 //Aqui coloca tu edad

if (early && age > 18) {
  raceNumber += 1000
}

if (early && age > 18) {
  console.log(`Tu carrera empieza a las 9:30 AM y tu Numero es el ${raceNumber}.`)
} else if(!early && age > 18) {
  console.log(`Si no te registraste temprano, tu carrera comenzara a las 11:00 AM y tu numero sera el ${raceNumber}.`)
} else if (age < 18) {
  console.log(`Tu carrera empieza a las 12:30 AM y tu Numero es el ${raceNumber}.`)
} else {
  console.log('Ve a la gaceta de informacion y pregunta por tu caso.')
}



