const addBook = document.querySelector('#addBook');
const popup = document.querySelector('.popupForm');
const closepopup = document.querySelector('.closeButton');
const bookList = document.querySelector('#bookList');
const submitButton = document.querySelector('#formButton');
const bName = document.querySelector('#bName');
const bAuthor = document.querySelector('#bAuthor');
const pNumber = document.querySelector('#pNumber')
addBook.addEventListener('click', function () {
  popup.style.display = 'inline';
});
closepopup.addEventListener('click', function () {
  popup.style.display = 'none';
});
let index = 0;
submitButton.addEventListener('click', function () {

  const newBook = document.createElement("div");
  const titleBook = document.createElement("h2");

  titleBook.setAttribute('class', 'title');
  newBook.appendChild(titleBook);
  newBook.setAttribute('id', index + 'box');
  newBook.classList.add('booksBox');
  
  bookList.appendChild(newBook);
  addBookToLibrary();
  listBooks(index);
  popup.style.display = 'none';


  index++;
});



let myLibrary = [];

function Book(bookName, bookAuthor, pageNumber) {
  this.bookName = bookName;
  this.bookAuthor = bookAuthor;
  this.pageNumber = pageNumber;
}
function addBookToLibrary(){
  let title = bName.value;
  let author = bAuthor.value;
  let pages = pNumber.value;
  let newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
}
function listBooks(index) {
  const closeFormButton = document.createElement("button");
  closeFormButton.innerText = "X";
  closeFormButton.style.fontSize = "large";
  closeFormButton.classList.add('closeButton')
  closeFormButton.addEventListener('click', function () {
    bookList.removeChild(document.getElementById(`${index}box`));
    delete myLibrary[index]

  })
  let titles = document.createElement('h1');
  titles.innerText = myLibrary[index].bookName;
  titles.style.color = 'white';
  titles.style.margin = '6px'
  document.getElementById(`${index}box`).appendChild(closeFormButton)
  document.getElementById(`${index}box`).appendChild(titles)
  let author = document.createElement('h1');
  author.innerText = myLibrary[index].bookAuthor;
  author.style.color = 'white';
  author.style.margin = '6px'
  document.getElementById(`${index}box`).appendChild(author)
  
}
