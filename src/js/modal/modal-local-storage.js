export const STORED_BOOKS = 'storedBooks';

export function saveBookToStorage(bookId, bookData) {
  STORED_BOOKS = JSON.parse(localStorage.getItem('storedBooks')) || {};

  STORED_BOOKS[bookId] = bookData;
  localStorage.setItem('storedBooks', JSON.stringify(STORED_BOOKS));
}

export function getStoredBooks() {
  return JSON.parse(localStorage.getItem('storedBooks')) || {};
}
