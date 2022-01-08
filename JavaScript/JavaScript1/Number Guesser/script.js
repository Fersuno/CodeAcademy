let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanNumber, computerNumber, targetNumber) => {
  let differenceHumanTarget = Math.abs(targetNumber - humanNumber);
  let differenceComputerTarget = Math.abs(targetNumber - computerNumber);
  if (differenceHumanTarget <= differenceComputerTarget) {
    return true;
  } else {
    return false;
  }
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1
  } if (winner === 'computer') {
    computerScore += 1
  }
  
}

const advanceRound = () => {
  currentRoundNumber += 1
}

updateScore('human');
console.log(humanScore); // To confirm that this value increased by 1
updateScore('computer');
console.log(computerScore); // To confirm that this value increased by 1