//base

let fasterShip = {
    color: 'silver',
    'Fuel Type': 'Turbo Fuel'
  }

//acceder a las propiedades de un objeto

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
const crewCount = spaceship.numCrew;
const planetArray = spaceship.flightPath;

//Braket Notation

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  const isActive = spaceship['Active Mission'] //con los brakets accedemos a el valor de ese objeto
  console.log(isActive) //imprime el valor del objeto del spaceship que seleccionamos

//asignacion de propiedades

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  spaceship.color = 'glorious gold' //Reasigno el color del objeto spaceship
  spaceship.numEngines = 4          //Agrego el valor numEngines a spaceship
  delete spaceship['Secret Mission']//Borro el valor Secret Mission

//Methods

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShip = {   //Creo el objeto
  retreat () {      //creo el metodo omitiendo el function con el ()
    console.log(retreatMessage) //El valor que devuelve si lo llamo
  },    //no olvides la coma entre metodos
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}

alienShip.retreat() //llamada al metodo.
alienShip.takeOff()

// Nested object

let spaceship = {
    passengers: {
      name: 'Space Dog'
    }, 
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  let capFave = spaceship.crew.captain['favorite foods'][0];
  
  let firstPassenger = spaceship.passengers[0];

//Pass by reference

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil' //con esta funcion reasigno un valor con una funcion
}

let remotelyDisable = obj => {
  obj.disabled = true; //con esta funcion agrego un objeto 
}

greenEnergy(spaceship)  //llamo la funcion y a quien
remotelyDisable(spaceship)

console.log(spaceship)  //me logea el valor nuevo y el que intercambiamos de spaceship

//loop en objetos

let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

for (let spaceMember in spaceship.crew) {
console.log(`${spaceMember}: ${spaceship.crew[spaceMember].name}`) //aqui estoy llamando variable: objeto-crew[variable]-name
}

for (let spaceMember in spaceship.crew) {
console.log(`${spaceship.crew[spaceMember].name}: ${spaceship.crew[spaceMember].degree}`)
}//aqui llamo al nombre de cada uno y luego su profesion.

//