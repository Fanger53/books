const addButton = document.querySelector('.add-btn');
const booksList = document.querySelector('.book-ul');
const authorInput = document.querySelector('.author-input');
const titleInput = document.querySelector('.title-input');

const books = [];
let retrievedBooks;
if (localStorage.getItem('books') === null) {
  retrievedBooks = localStorage.setItem('books', JSON.stringify(books));
} else {
  retrievedBooks = JSON.parse(localStorage.getItem('books'));
}

const displayBooks = () => {
  retrievedBooks = JSON.parse(localStorage.getItem('books'));
  retrievedBooks.forEach((book) => {
    const div = document.createElement('div');
    div.classList.add('book');
    div.innerHTML = `
    <h5>${book.title}</h5>  
    <p>${book.author}</p>  
    <button class="remove">remove</button>
    <hr>
  `;
    booksList.appendChild(div);
  });
};

