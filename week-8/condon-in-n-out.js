/**
 * Title: Condon-in-n-out-books.js
 * Author: Laurel Condon
 * Date: 7 May 2023
 * Description: JavaScript file for Assignment 8.2
 */

// Object for books ISBN, titles and pages properties

const books = {
  isbn: ["978-0307588364", "978-1791392796", "0735219109"],
  title: ["Gone Girl", "Verity", "Where the Crawdads Sing"],
  pages: ["432", "331", "400"]
};

// Object with author and genre properties

const authors = {
  name: ["Gillian Flynn", "Colleen Hoover", "Delia Owens"],
  genre: ["Thriller", "Thriller", "Fiction"]
};

// Function for the onclick button to display
function display() {

  const choice = document.getElementById('select-value').value;

  // Switch statement for users selection
  switch(choice) {

// Statement for Books including ISBN, author and pages
    case "books":
// Table for favorite books
    let tblBooks = `
    <h3>Top 3 Favorite Books</h3>
    <table class='table'>
    <thead>
      <tr>
      <th>ISBN</th>
      <th>Title</th>
      <th>Pages</th>
      </tr>
      </thead>
      <tbody>
      `;

  const valueIsbn = books.isbn;
  const valueTitle = books.title;
  const valuePages = books.pages;

  for (let value = 0; value < books.isbn.length; value++) {

    let row = `
    <tr>
    <td>` + valueIsbn[value] + `</td>
    <td>` + valueTitle[value] + `</td>
    <td>` + valuePages[value] + `</td>
    </tr>
    `;

    tblBooks += row;
  };

  tblBooks += `
  </tbody>
  </table>
  `;

  document.getElementById("test-results").innerHTML = tblBooks;

break;

case "authors":
// Sets up table for authors and genres
let tblAuthors = `
<h3>Top 3 Favorite Authors</h3>
<table class='table'>
<thead>
<tr>
<th>Name</th>
<th>Genre</th>
</tr>
</thead>
<tbody>
`;

const authorName = authors.name;
const authorGenre = authors.genre;

for (let value = 0; value < authors.name.length; value++ ){

  let row = `
  <tr>
  <td>` + authorName[value] + `</td>
  <td>` + authorGenre[value] + `</td>
  </tr>
  `;

  tblAuthors += row;
};

tblAuthors +=`
</tbody>
</table>
`;


document.getElementById("test-results").innerHTML = tblAuthors;

break;

// Sets message if user clicks --Selection--
default:
  alert('Invalid selection, try again');

  }
}

button.addEventListener("click", display);
