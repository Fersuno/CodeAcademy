const tipCalculator = (quality, total) => {
  if (quality === 'bad') {
    return total * .05
  } else if (quality === 'ok') {
    return total * .15
  } else if (quality === 'good') {
    return total * .20
  } else if (quality === 'excellent') {
    return total * .30
  } else {
    return total * .18
  }
}

console.log(tipCalculator('bad', 100)) //Primero va la calidad del servicio y luego el pago, te delvuelve el porcentaje a pagar.