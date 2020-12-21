const addBook = document.querySelector('#addBook');
const popup = document.querySelector('.popupForm');
const closepopup = document.querySelector('.closeButton');
addBook.addEventListener('click',function () {
    popup.style.display='flex';
});
closepopup.addEventListener('click',function () {
    popup.style.display='none';
});