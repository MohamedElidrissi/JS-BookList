let isAlertShown = false;

export function showAlert(msg, alertType) {
  if (!isAlertShown) {
    const form = document.getElementById('book-form');
    const alert = document.createElement('div');
    alert.className = `alert alert-${alertType}`;
    alert.setAttribute('role', 'alert');
    alert.appendChild(document.createTextNode(msg));

    isAlertShown = true;
    form.insertBefore(alert, form.firstChild);

    setTimeout(() => {
      form.removeChild(alert);
      isAlertShown = false;
    }, 3000);
  }
}

export function addBook(book) {
  const tableBody = document.querySelector('.books-table tbody');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td scope="col">${book.title}</td>
    <td scope="col">${book.author}</td>
    <td scope="col">${book.isbn}</td>
    <td scope="col"><a class="delete" href="#" style="color: red; text-decoration: none;">x</a></td>
  `;

  tableBody.appendChild(row);
}
