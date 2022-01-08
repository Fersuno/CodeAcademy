//methodo This (accedes a un objeto dentro de tu variable cuando estas dentro de la variable)

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.` //con this accedo a model y energy.
    }
  };
  console.log(robot.provideInfo())

//arrows y funciones dentro de objetos (nunca usar =>)

  const robot = {
    energyLevel: 100,
    checkEnergy () { //antes estaba escrito checkEnergy: () => y asi da error.
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();

//Que pasa cuando cambias valores numericos por strings

const robot = {
    _energyLevel: 100,
    recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};

robot._energyLevel = 'high' //al cambiar el numero por una string muto el valor y causo posibles errores.

robot.recharge() //me dira high30%

//get metodo 

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
      if (typeof this._energyLevel === 'number') {
        return `My current energy level is ${this._energyLevel}`
      } else {
        return 'System malfunction: cannot retrieve energy level'
      }
    }
  };
  
  console.log(robot.energyLevel)

  //set metodo

  const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
      if(typeof num === 'number' && num >= 0) {
        this._numOfSensors = num
      } else {
        return 'Pass in a number that is greater than or equal to 0'
      }
    }
    
  };
  
  robot.numOfSensors = 100
  
  console.log(robot.numOfSensors)

//Built in objects

const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotKeys = Object.keys(robot); //objet.keys devuelve las llaves del objeto llamado

console.log(robotKeys);

const robotEntries = Object.entries(robot) //Object.entries devuelve las llaves y su valor
console.log(robotEntries);

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot) //Object.assign devuelve una copia de robot pero con los valores nuevos agregados

console.log(newRobot);