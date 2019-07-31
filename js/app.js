import Book from './book.js';
import { showAlert, addBook } from './ui.js';

document
  .querySelector('#book-form button[type=submit]')
  .addEventListener('click', e => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    if (title === '' || author === '' || isbn === '') {
      showAlert('Please fill in all fields', 'danger');
    } else {
      addBook(new Book(title, author, isbn));
      showAlert('Book Added!', 'success');
    }

    e.preventDefault();
  });

document.querySelector('.books-table').addEventListener('click', e => {
  if (e.target.className === 'delete') {
    e.target.parentElement.parentElement.remove();
    showAlert('Book deleted', 'danger');
  }
});
