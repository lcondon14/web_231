/**
 * Title: condon-bookstore.js
 * Author: Laurel Condon
 * Date: 20 April  2023
 * Description: JavaScript page for assignment 6.2
 */

const books = ["Gone Girl", "Verity", "Little Blue Truck"];
/** Favorite book titles */

const authors = ["Coleen Hoover", "JK Rowling", "Gillian Flynn"];
/** Favorite authors */
authors.sort();
/** Sorts authors by ascending order */

const publishers = ["Penguin Random House", "Harper Collins", "Simon & Schuster"];
/** Favorite publisher names */
publishers.sort();
publishers.reverse();
/** Sorts publishers in descending order */

function displayListing() {
  const choice = document.getElementById("listing-choice").value;
  let output = "";
/** Switch Block created for books, authors and
 * publishers case statement
 */
switch (choice) {

/** Case statement for books */
  case "books":
    output += "<h3>Books Listing</h3>";
    output += "<table class='table'>";
    output += "<th>Title</th>";
    output += "<tbody>";
    for (let tblBooks = 0; tblBooks < books.length; tblBooks++) {
      output += "<tr><td>" + books[tblBooks] + "</tr></td>";
    }

    output += "</tbody>";
    output += "</table>";
    break;

/** Case statement for authors  */
case "authors":
  output += "<h3>Authors Listing</h3>";
  output += "<table class='table'>";
  output += "<th>Name</th>";
  output += "<tbody>";
  for (let tblAuthors = 0; tblAuthors < authors.length; tblAuthors++) {
    output += "<tr><td>" + authors[tblAuthors] + "</tr></td>";
  }

  output += "</tbody>";
  output += "</table>";
  break;

 /** Case statement for publishers */
 case "publishers":
  output += "<h3>Publishers Listing</h3>";
  output += "<table class='table'>";
  output += "<th>Publishers</th>";
  output += "<tbody>";
  for (let tblPublishers = 0; tblPublishers < publishers.length; tblPublishers++) {
    output += "<tr><td>" + publishers[tblPublishers] + "</td></tr>";
  }

  output += "</tbody>";
  output += "</table>";
  break;

default:
  choice = alert("Invalid selection, please try again.");

}

document.getElementById("form-results").innerHTML = output;
}

const listingButton = document.getElementById("listing-choice");

listingButton = addEventListener("click", displayListing);
