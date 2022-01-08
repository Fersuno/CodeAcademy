let userName ='';
userName ? console.log(`Hola, ${userName}!`) : console.log('Hola!');
let userQuestion = 'Que numero deberia jugar mañana?';
console.log(`El usuario pregunto: ${userQuestion}`);
const randomNumber = Math.floor(Math.random() * 8)
let eightBall = '';
switch (randomNumber) {
  case 0:
    eigthBall = ('It is certain')
    break;
  case 1:
    eigthBall = ('It is decidedly so')
    break;
  case 2:
    eigthBall = ('Reply hazy try again')
    break;
  case 3:
    eigthBall = ('Cannot predict now')
    break;
  case 4:
    eigthBall = ('Do not count on it')
    break;
  case 5:
    eigthBall = ('My sources say no')
    break;
  case 6:
    eigthBall = ('Outlook not so good')
    break;
  case 7:
    eigthBall = ('Signs point to yes')
    break;
}
console.log(`The eight ball answered: ${eigthBall}`)
