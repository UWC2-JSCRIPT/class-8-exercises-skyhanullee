const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

const API_KEY = 'R5ZK6sLA5VuYoL7mb4jnqc0IAJOQjC4U';

const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/'

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  const fullDate = `${year}-${month}-${date}`;

  const listOption = 'hardcover-fiction'; // default on nytimes

  const url = `${BASE_URL}${fullDate}/${listOption}.json?api-key=${API_KEY}`;

  // Fetch bestselling books for date and add top 5 to page
  fetch(url)
    .then(function(data) {
      return data.json();
    })

    .then(function(responseJson) {
      console.log(responseJson);
      const bookResults = responseJson.results.books

      console.log(url);

      if(responseJson.num_results > 0) {
        console.log(bookResults[0]);
        for(let i = 0; i < 5; i++) {
          createBookResult(bookResults[i]);
        }
      }
      else {
        console.log('Number of results is 0');
        const resultElement = document.createElement('h3');
        resultElement.textContent = 'No results, try a different date';
        document.getElementById('books-container').appendChild(errorElement);
      }

      if(responseJson.status == 'ERROR') {
        console.log('Error status');
        createErrorElement();
      }
    })
});

function createBookResult(bookResult) {
  const deleteBookElement = document.createElement('div');

  // create new book
  const bookElement = document.createElement('div');

  // create new book body 
  const bookBodyElement = document.createElement('div');

  // create book components
  const bookImgElement = document.createElement('img');
  const bookTitleElement = document.createElement('h4');
  const bookAuthorElement = document.createElement('p');
  const bookDescriptionElement = document.createElement('p');

  // get book components from API
  const bookImg = bookResult.book_image;
  const bookTitle = bookResult.title;
  const bookAuthor = bookResult.author;
  const bookDescription = bookResult.description;

  // assign id to all the book elements
  deleteBookElement.setAttribute('id', 'delete-book-container');
  bookElement.setAttribute('id', 'book');
  bookBodyElement.setAttribute('id', 'book-body');
  bookImgElement.setAttribute('id', 'book-img');
  bookTitleElement.setAttribute('id', 'book-title');
  bookAuthorElement.setAttribute('id', 'book-author');
  bookDescriptionElement.setAttribute('id', 'book-description');

  // set content from API
  bookImgElement.setAttribute('src', bookImg);
  bookTitleElement.textContent = bookTitle;
  bookAuthorElement.textContent = bookAuthor;
  bookDescriptionElement.textContent = bookDescription;

  // bootstrap styling
  bookElement.setAttribute('class', 'card border-0');
  bookImgElement.setAttribute('class', 'card-img-top col-md-6 px-0');
  bookBodyElement.setAttribute('class', 'card-body border-0');
  bookAuthorElement.setAttribute('class', 'card-text');

  // append to the page
  document.getElementById('books-container').appendChild(deleteBookElement);
  deleteBookElement.appendChild(bookElement);
  bookElement.appendChild(bookBodyElement);
  bookBodyElement.append(bookImgElement, bookTitleElement, bookAuthorElement, bookDescriptionElement);
}


function createErrorElement() {
  const errorElement = document.createElement('h3');
  errorElement.textContent = 'Something went wrong with your search, try again.';
  document.getElementById('books-container').appendChild(errorElement);
}

