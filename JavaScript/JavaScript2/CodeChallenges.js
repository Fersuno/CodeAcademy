//Una funcion que me devuelva un array al contrario

const reverseArray = arr => {
    let reversed = []
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i])
    }
    return reversed
  }
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 

//Una funcion que imprime cada array en una string predeterminada

const greetAliens = arr => {
    for (let i = 0; i < arr.length; i++) {
          console.log('Oh powerful ' + arr[i] + ', we humans offer our unconditional surrender!');
    }
}

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens)

//Una funcion for que hace .map

const convertToBaby = arr => {
    let baby = []
    for (let i = 0; i < arr.length; i++) {
      baby.push('baby ' + arr[i])
    }
    return baby
  }
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)) 

//nested scope(loop dentro de loop)

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];
            let j = 1
            while (j < number) {
            j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 

//aplicando forEach

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = arr => {
  arr.forEach(politelyDecline)
}

const acceptEverything = arr => {
  arr.forEach(a => {
    console.log(`Ok, I guess I will eat some ${a}.`) })
}

//aplicando .map

const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

const squareNums = arr => arr.map(toSquare)

//aplicando .map para saludar con string en mayusculas

const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!')

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))

//comando .sort

const sortYears = arr => arr.sort((x, y) => y - x)

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years)) //devolvera los años de mayor a menor

//comando .filter y .include

const justCoolStuff = (a, b) => a.filter(item => b.includes(item))

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff)) //print los iguales de ambos objetos

//array .Every

const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant');

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner)) //printea los alimentos veganos 

//array .sort

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => arr.sort((specie1, specie2) => specie1.numTeeth > specie2.numTeeth)

console.log(sortSpeciesByTeeth(speciesArray)) //printea todo en order de teeths

//.findIndex

const findMyKeys = arr => arr.findIndex(key => key === 'keys')

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff)) //printea 4

//dogFactory

const dogFactory = (name, breed, weight) => {
    return {
      _name: name,
      _breed: breed,
      _weight: weight,
      get name() {
        return this._name
      },
      set name(newName) {
        this._name = newName
      },
      get breed() {
        return this._breed
      },
      set breed(newBreed) {
        this._breed = newBreed
      },
      get weight() {
        return this._weight
      },
      set weight(newWeight) {
        this._weight = newWeight
      },
      bark() {
        return 'ruff! ruff!'
      },
      eatTooManyTreats() {
        this._weight++
      },
    }
  }  


