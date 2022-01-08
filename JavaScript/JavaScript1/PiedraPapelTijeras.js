const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else { console.log('Esta seleccion no es validad, puedes escoger entre: paper, scissors o rock.')
    };
  };
  const getComputerChoice = () => {
    const randomNumber = (Math.floor(Math.random() * 3))
    switch (randomNumber) {
      case 0:
        return ('paper');
      case 1:
        return ('scissors');
      case 2:
        return ('rock');
      }
  }
  
  let determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
    return 'tie'
    }
    if (userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'Computer won!'
      } else {
        return 'Human Won!'
      }
    } 
    if (userChoice === 'paper') {
      if(computerChoice === 'scissors') {
        return 'Computer won!'
      } else {
        return 'Human Won!'
      }
    }
    if (userChoice === 'scissors') {
      if(computerChoice === 'rock') {
        return 'Computer won!'
      } else {
        return 'Human Won!'
      }
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  
  }
  playGame()
  
  