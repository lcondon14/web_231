/**
 * Title: condon-number-game.js
 * Author: Laurel Condon
 * Date: 5 April 2023
 * Description: JavaScript page for assignment 4.2
 */

const rnd = generateRndNum()

function generateRndNum() {
  return Math.floor((Math.random() * 10) + 1)
}

function chkGuess () {
  const msgLessThan = "The number is less than " + document.getElementById('guessNum').value
  const msgGreaterThan = "The number is greater than " + document.getElementById('guessNum').value
  const msgCongrats = 'Congratulations! You picked the right number!'
  const guess = document.getElementById('guessNum').value
if (guess > rnd) {
  document.getElementById('test-results').innerHTML = msgLessThan
} else if (guess < rnd) {
  document.getElementById('test-results').innerHTML = msgGreaterThan
} else {
  document.getElementById('test-results').innerHTML = msgCongrats
}

}
