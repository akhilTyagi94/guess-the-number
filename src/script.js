'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '❌ No number!';
    displayMessage('❌ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is too high or too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
    //   document.querySelector('.message').textContent = guess > secretNumber ? '📈 Guess is Too High!' : '📉 Guess is Too Low!';
      displayMessage(guess > secretNumber ? '📈 Guess is Too High!' : '📉 Guess is Too Low!');

      score--;

      document.querySelector('.score').textContent = score;
    } else {

    //   document.querySelector('.message').textContent = '🤢 You LOST the game';

      displayMessage('🤢 You LOST the game');
      
      document.querySelector('.score').textContent = 0;
    }
  } /* else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Guess is Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤢 You LOST the game';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Guess is Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤢 You LOST the game';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

// Reset all Field on again button click
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.score').textContent = score;

//   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('.number').style.width = '15rem';
});
