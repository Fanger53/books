// eslint-disable-next-line no-unused-vars
class Book {
  constructor() {
    this.BOOKS_DATA = JSON.parse(localStorage.getItem('books_data')) || [];
  }

  list() {
    return this.BOOKS_DATA;
  }

  setStorage() {
    localStorage.setItem('books_data', JSON.stringify(this.BOOKS_DATA));
  }

  add() {
    const bookTitle = document.getElementById('book-title');
    const bookAuthor = document.getElementById('book-author');
    const bookIsbn = document.getElementById('book-isbn');

    const bookObj = {};

    let exists = false;

    for (let i = 0; i < this.BOOKS_DATA.length; i += 1) {
      if (this.BOOKS_DATA[i].title === bookTitle.value
        || this.BOOKS_DATA[i].isbn === bookIsbn.value) {
        exists = true;
      }
    }

    if (!exists) {
      bookObj.title = bookTitle.value;
      bookObj.author = bookAuthor.value;
      bookObj.isbn = bookIsbn.value;
      this.BOOKS_DATA.push(bookObj);
      bookTitle.value = '';
      bookAuthor.value = '';
      bookIsbn.value = '';
    }

    this.setStorage();
  }

  remove(element) {
    const textElements = element.parentElement.querySelectorAll('.book-card-text');

    this.BOOKS_DATA = this.BOOKS_DATA.filter((obj) => {
      if (textElements[0].innerText === `"${obj.title}"` || textElements[1].innerText === obj.author || textElements[1].innerText === obj.isbn) {
        return false;
      }

      return true;
    });
    this.setStorage();
  }
}