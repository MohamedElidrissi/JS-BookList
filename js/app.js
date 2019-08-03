import Book from './book.js';
import { addBook, clearFields, showAlert } from './ui.js';
import { getBooks, removeBook, storeBook } from './store.js';

document
  .querySelector('#book-form button[type=submit]')
  .addEventListener('click', e => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const book = new Book(title, author, isbn);

    if (title === '' || author === '' || isbn === '') {
      showAlert('Please fill in all fields', 'danger');
    } else {
      addBook(book);
      storeBook(book);
      showAlert('Book Added!', 'success');
      clearFields();
    }

    e.preventDefault();
  });

document.querySelector('.books-table').addEventListener('click', e => {
  if (e.target.className === 'delete') {
    e.target.parentElement.parentElement.remove();
    showAlert('Book deleted', 'danger');
    const isbn = e.target.parentElement.parentElement.querySelector(
      ':nth-child(3)'
    ).textContent;
    removeBook(isbn);
  }
});

getBooks().forEach(book => {
  addBook(book);
});
