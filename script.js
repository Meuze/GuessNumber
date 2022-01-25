'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = document.querySelector('.highscore').textContent;
let roundScore = document.querySelector('.score').textContent;
console.log(secretNumber);

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Raad het getal...';
  document.querySelector('body').style.backgroundColor = '#000';
  document.querySelector('.number').style.width = '15rem';
  console.log(secretNumber);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ no number';
    // document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guess').value = '';
  }
  //When player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Goed geraden!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '50rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guess').value = '';
    if (roundScore > highScore) {
      console.log(`highscore: ${highScore}`);
      console.log(`roundScore: ${roundScore}`);
      document.querySelector('.highscore').textContent = roundScore;
    }
  }
  //When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⛔ Het getal is lager!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥Helaas, Je hebt verloren!!!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.guess').value = '';
    }
  }
  //When guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⛔ Het getal is hoger!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess').value = '';
    } else {
      document.querySelector('.message').textContent =
        '💥Helaas, je hebt verloren!!!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').value = '';
    }
  }
});
