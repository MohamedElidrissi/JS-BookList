export function getBooks() {
  return localStorage.getItem('books') == null
    ? []
    : JSON.parse(localStorage.getItem('books'));
}

export function storeBook(book) {
  let books = getBooks();
  books.push(book);
  books = JSON.stringify(books);
  localStorage.setItem('books', books);
}

export function removeBook(isbn) {
  const books = getBooks();
  localStorage.setItem(
    'books',
    JSON.stringify(books.filter(book => book.isbn !== isbn))
  );
}
