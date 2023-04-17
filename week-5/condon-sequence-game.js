/**
 * Title: condon-sequence-game.js
 * Author: Laurel Condon
 * Date: 13  April 2023
 * Description: JavaScript page for assignment 5.2
 */


function displaySequence() {
  const choice = document.getElementById("number-sequence").value;

  /** Switch block created with even, odd, and numbers case statements */
  switch (choice) {

    /** Variable created if a user selects numbers to create a loop to display number 1-10  */
    case "numbers":
      let txtNumSequence = "";
      let index = 0;
      while (index <= 10) {
        txtNumSequence += index + ", ";
        index++;
      }
/** Get inner HTML element */
      document.getElementById("test-results").innerHTML = txtNumSequence.slice(0, -2);
      break;

/** If a user selects even numbers
 * from the drop down menu, an even variable
 * is created and loops through even numbers
 * 1-20
 */
    case "even":
      let txtEvenSequence = "";
      let evenNumber = 0;
      do {
        txtEvenSequence += evenNumber + ", ";
        evenNumber = evenNumber + 2;
      }
      while (evenNumber < 21);

      document.getElementById("test-results").innerHTML = txtEvenSequence.slice(0, -2);
      break;
/** If a user selects odd numbers
 * from the drop down menu, a odd variable
 * is created and loops through even numbers
 * 1-20
 */

    case "odd":
       let txtOddSequence = "";
       for (let i = 1; i < 20; i + 2) {
        txtOddSequence += i + ", ";
        i = i + 2;
       }
      document.getElementById("test-results").innerHTML = txtOddSequence.slice(0, -2);
      break;
/** If user selects --select-- from
 * drop down menu an alert is sent
 */
      default:
      choice = alert("Invalid selection, please try again.");
  }
}

/** Provides access to display sequence button  */
const numberButton = document.getElementById("sequence-button")

/** Adds event listener to sequence button */
numberButton.addEventListener("click", displaySequence);
