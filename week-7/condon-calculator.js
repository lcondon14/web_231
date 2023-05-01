/**
 * Title: condon-calculator
 * Author: Laurel Condon
 * Date: 26 April 2023
 * Description: JavaScript page for Calculator app
 */

function multiply (num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error("Input must be numbers");
  }
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Input must be numbers");
  }
  return num1 * num2;
}

function divide(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error("Input must be numbers");
  }
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Input must be numbers");
  }
  if (num1 === 0) {
    throw new Error("Cannot divide zero")
  }
  if (num2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return num1 / num2;
}

const multiplyButton = document.getElementById("multiply-button");


function displayMultiplyResults() {
  const input1 = document.getElementById('multi-one').value;
  const input2 = document.getElementById('multi-two').value;
  const num1 = parseFloat(input1);
  const num2 = parseFloat(input2);

  try {
  const result = multiply(num1, num2);
  const resultElement = document.getElementById("mul-results");
  resultElement.innerHTML = result;

  } catch (error) {
    alert(error.message);
  }
}


const divideButton = document.getElementById("divide-button");


function displayDivideResults() {
  const input1 = document.getElementById("div-one").value;
  const input2 = document.getElementById("div-two").value;
  const num1 = parseFloat(input1);
  const num2 = parseFloat(input2);

  try {
  const result = divide(num1, num2);
  const resultElement = document.getElementById("div-results");
  resultElement.innerHTML = result;

  } catch (error) {
    alert(error.message);
  }
}


divideButton.onclick = displayDivideResults;
multiplyButton.onclick = displayMultiplyResults;
