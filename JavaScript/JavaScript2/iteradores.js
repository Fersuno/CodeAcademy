//metodos para llamar arrays

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => { //.forEach
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => { //.map
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => { //.filter
  return typeof thing === 'number';
});

console.log(onlyNumbers);

//.findIndex

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});

//.reduce

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {

 console.log('The value of accumulator: ', accumulator);

console.log('The value of currentValue: ', currentValue);

return accumulator + currentValue
}, 10)

console.log(newSum)

//tarea final

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some(word => {
  return word.length < 6;
}));

const interestingWords = words.filter((word) => {return word.length > 5});

console.log(interestingWords.every((word) => {return word.length > 5}));

//tarea final 2

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

cities.forEach(city => console.log('Have you visited ' + city + '?'));

const longCities = cities.filter(city => city.length > 7);

const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

const smallerNums = nums.map(num => num - 5);

nums.every(num => num < 0);

//documentacion

//.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
//.map() executes the same code on every element in an array and returns a new array with the updated elements.
//.filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
//.findIndex() returns the index of the first element of an array which satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
//.reduce() iterates through an array and takes the values of the elements and returns a single value.
//all iterator methods takes a callback function that can be pre-defined, or a function expression, or an arrow function.