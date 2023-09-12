'use strict';
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

attachEventListenerToButtons();
btnCloseModal.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModalOnEscButton);
overlay.addEventListener('click', closeModal);

// To see all information about the event such as what key was pressed :
// document.addEventListener('keydown', function (event) {
//     console.log(event);
// }

// When you add a parameter in the handler function, JS will call the function with the event object as an argument

function attachEventListenerToButtons() {
  for (let i = 0; i < btnsShowModal.length; i++) {
    btnsShowModal[i].addEventListener('click', showModal);
  }
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function closeModalOnEscButton(event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
}

function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
