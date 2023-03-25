/**
 * Title: condon-payroll.js
 * Author: Laurel Condon
 * Date: 24 March 2023
 * Description: JavaScript page for assignment 2.2
 */

/** Assigned variables to first employee which includes name, address, date and pay */
const ludwigFirstName = "Ludwig"
const ludwigLastName = "Beethoven"
const ludwigAddress = "505 main street"
const ludwigHireDate = new Date().toLocaleDateString('en-US')
const ludwigPayRate = 18.9.toFixed(1)

/** Assigned variables to second employee which includes name, address, date and pay */
const bachFirstName = "Johan"
const bachLastName = "Bach"
const bachAddress = "512 main street"
const bachHireDate = new Date().toLocaleDateString('en-US');
const bachPayRate = 25.5.toFixed(1)

/** Assigned variables to third employee which includes name, address, date and pay */
const wolfgangFirstName = "Wolfgang"
const wolfgangLastName = "Mozart"
const wolfgangAddress = "600 main street"
const wolfgangHireDate = new Date().toLocaleDateString('en-US');
const wolfgangPayRate = 50.1.toFixed(1)

/** Modified HTML Dom elements for first employee card */
document.getElementById("ludwig-firstName").innerHTML = ludwigFirstName;
document.getElementById("ludwig-lastName").innerHTML = ludwigLastName;
document.getElementById("ludwig-address").innerHTML = ludwigAddress;
document.getElementById("ludwig-hireDate").innerHTML = ludwigHireDate;
document.getElementById("ludwig-payRate").innerHTML = ludwigPayRate;

/** Modified HTML DOM elements for second employee card */
document.getElementById("bach-firstName").innerHTML = bachFirstName;
document.getElementById("bach-lastName").innerHTML = bachLastName;
document.getElementById("bach-address").innerHTML = bachAddress;
document.getElementById("bach-hireDate").innerHTML = bachHireDate;
document.getElementById("bach-payRate").innerHTML = bachPayRate;

/** Modified HTML DOM elements for third employee card */
document.getElementById("wolfgang-firstName").innerHTML = wolfgangFirstName;
document.getElementById("wolfgang-lastName").innerHTML = wolfgangLastName;
document.getElementById("wolfgang-address").innerHTML = wolfgangLastName;
document.getElementById("wolfgang-hireDate").innerHTML = wolfgangHireDate;
document.getElementById("wolfgang-payRate").innerHTML = wolfgangPayRate;
