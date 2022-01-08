const kelvin = 0; //El valor de kelvin segun la wiki.
const celsius = kelvin - 273; //EL valor de celsius segun la wiki.
let fahrenheit = celsius * (9/5) + 32; //El el calculo para determinar los grados fahrenheit a partir de los grados celsius.
fahrenheit = Math.floor(fahrenheit); //Redondea el numero fahrenheit hacia abajo.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
let newton = celsius * (33/100)
newton = Math.floor(newton)
console.log(`The temperature is ${newton} degrees newton.`)