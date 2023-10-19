const addBookForm = document.getElementById('addBookForm');
const updateBookForm = document.getElementById('updateBookForm');
const deleteBookForm = document.getElementById('deleteBookForm');
const bookList = document.getElementById('bookList');

addBookForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const id = document.getElementById('id').value;
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  await fetch('/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({id, title, author }),
  });
  location.reload(); // Refresh the page after adding a book
});

updateBookForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const id = document.getElementById('updateId').value;
  const title = document.getElementById('updateTitle').value;
  const author = document.getElementById('updateAuthor').value;
  await fetch(`/books/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id , title, author }),
  });
  location.reload(); // Refresh the page after updating a book
});

deleteBookForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const id = document.getElementById('deleteId').value;
  await fetch(`/books/${id}`, {
    method: 'DELETE',
  });
  location.reload(); // Refresh the page after deleting a book
});

// Fetch and display books
async function fetchBooks() {
  const response = await fetch('/books');
  const books = await response.json();
  books.forEach((book) => {
    const li = document.createElement('li');
    li.textContent = `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`;
    bookList.appendChild(li);
  });
}

fetchBooks();
