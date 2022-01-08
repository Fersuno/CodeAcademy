//For...of base 

const hobbies = ['singing', 'eating', 'quidditch', 'writing'];
 
for (const hobby of hobbies) {
  console.log(`I enjoy ${hobby}.`); //imprime I enjoy (cada string).
}

//iterar una sola string

const username = 'joe';
 
for (const char of username) {
  console.log(char); // imprime letra por letra
}

//Break y Continue

        //break
const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Terrorbird','Parotia','Kakapo'];
 
for (const bird of strangeBirds) {
  if (bird === 'Basan'){ 
    break; 
  }
  console.log(bird); //deja de imprimir cuando llega al break (basan)
}

        //continue

const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Cow', 'Terrorbird', 'Parotia', 'Kakapo'];
 
for (const bird of strangeBirds) {
  if  (bird === 'Cow'){
    continue;
  }
  console.log(bird); //Imprime todo excepto el que declaraste.
}

//