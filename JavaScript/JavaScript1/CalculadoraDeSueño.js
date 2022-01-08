const getSleepHours = day => {
  
    if(day === 'lunes') {
    return 8;
    } 
    else if (day === 'martes') {
    return 8;
    } 
    else if (day === 'miercoles') {
    return 8;
    } 
    else if(day === 'jueves') {
    return 8;
    } 
    else if(day === 'viernes') {
    return 8;
    } 
    else if(day === 'sabado') {
    return 8;
    } 
    else if(day === 'domingo') {
    return 8;
    } else {
    return 'error';
    }
  }
  
  const getActualSleepHours = () => {
    return getSleepHours('lunes') + getSleepHours('martes') + getSleepHours('miercoles') + getSleepHours('jueves') + getSleepHours('viernes') + getSleepHours('sabado') + getSleepHours('domingo');
  }
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours() 
    if(actualSleepHours === idealSleepHours) {
      console.log('Dormiste las cantidad de horas perfectas!');
    } else if(actualSleepHours > idealSleepHours) {
      console.log('Dormiste' + (actualSleepHours - idealSleepHours) + 'mas horas de las necesarias!');
    } else if(actualSleepHours < idealSleepHours) {
      console.log('Necesitas descansar' + (idealSleepHours - actualSleepHours) + 'horas mas!')
    } else {
      console.log('Error!')
    }
  
  }
  
  calculateSleepDebt()