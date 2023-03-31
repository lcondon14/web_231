/**
 * Title: condon-temp-conversion.js
 * Author: Laurel Condon
 * Date: 31 March 2023
 * Description: JavaScript page for assignment 3.3
 */

function calcCelsius () {

  const fahrenheit = document.getElementById('fahrenheitValue').value


  const celsius = (fahrenheit - 32) / 1.8

  document.getElementById('temp-results').innerHTML = celsius.toFixed(2)
}
