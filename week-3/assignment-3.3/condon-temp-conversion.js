/**
 * Title: condon-temp-conversion.js
 * Author: Laurel Condon
 * Date: 31 March 2023
 * Description: JavaScript page for assignment 3.3
 */

/** Function for calculating fahrenheit to celsius */
function calcCelsius () {

  const fahrenheit = document.getElementById('fahrenheitValue').value


  const celsius = (fahrenheit - 32) / 1.8

  document.getElementById('test-results').innerHTML = celsius.toFixed(2)
}
