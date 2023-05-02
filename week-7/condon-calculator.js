/**
 * Title: condon-calculator
 * Author: Laurel Condon
 * Date: 26 April 2023
 * Description: JavaScript page for Calculator app
 */
// Multiplying function
function multiply (num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error("Input must be numbers");
  }
  // Checks if inputs are numbers
  if (isNaN(num1) || isNaN(num2)) {
    // Error message thrown if not truthy
    throw new Error("Input must be numbers");
  }
  // Results of input fields
  return num1 * num2;
}

// Division Function
function divide(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
// Throws error message if not truthy
    throw new Error("Input must be numbers");
  }

// Checks if inputs are numbers
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Input must be numbers");
  }
  // Error message thrown if user divides 0
  if (num1 === 0) {
    throw new Error("Cannot divide zero")
  }
  // Error message if user divides by 0
  if (num2 === 0) {
    throw new Error("Cannot divide by zero");
  }

// Results of input fields
  return num1 / num2;
}

// Button created for results
const multiplyButton = document.getElementById("multiply-button");


function displayMultiplyResults() {
  // User input variables
  const input1 = document.getElementById('multi-one').value;
  const input2 = document.getElementById('multi-two').value;
  const num1 = parseFloat(input1);
  const num2 = parseFloat(input2);
// Try statement for multiply function
  try {
  const result = multiply(num1, num2);
  // Displays user input results
  const resultElement = document.getElementById("mul-results").innerHTML = num1 + ' * ' + num2 + ' = ' + result;
  resultElement.innerHTML = result;
// Alert for error
  } catch (error) {
    alert(error.message);
  }
}

// Button created for division equation
const divideButton = document.getElementById("divide-button");

// Function for user input division equation
function displayDivideResults() {
  const input1 = document.getElementById("div-one").value;
  const input2 = document.getElementById("div-two").value;
  const num1 = parseFloat(input1);
  const num2 = parseFloat(input2);

  try {
  const result = divide(num1, num2);
  // Displays results for division equation
  const resultElement = document.getElementById("div-results");
  resultElement.innerHTML = result;
// Error message thrown
  } catch (error) {
    alert(error.message);
  }
}

// Onclick function created for multiply
divideButton.onclick = displayDivideResults;
// Onclick function created for divide
multiplyButton.onclick = displayMultiplyResults;
