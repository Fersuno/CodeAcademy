const finalGrade = (numero1, numero2, numero3) => {
    if ((numero1 < 0 || numero1 > 100) || (numero2 < 0 || numero2 > 100) || (numero3 < 0 || numero3 > 100)) {
      return 'You have entered an invalid grade.'
    }
    let average = (numero1 + numero2 + numero3) / 3
      if (average < 60) {
      return 'F'
    } else if (average < 70) {
      return 'D'
    } else if (average < 80) {
      return 'C'
    } else if (average < 90) {
      return 'B'
    } else if (average < 101) {
      return 'A'
    }
  }
  
  console.log(finalGrade(0, 92, 95))