const numberDigits = x => {
    if (x < 0 || x > 99){
      return `The number is: ${x}`
    } else if (x < 10) {
      return `One digit: ${x}`
    } else if (x < 100) {
      return `Two digits: ${x}`
    }
  }
  
  numberDigits(10) //Te dira si tiene 1 o 2 digitos, de lo contrario te devolvera el numero plano sea negativo o mayor a 99.