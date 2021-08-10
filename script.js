'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Loops through all the show-modals
for (let i = 0; i < btnsOpenModal.length; i++)
  //opens modal
  btnsOpenModal[i].addEventListener('click', openModal);

//Closing a modal 'x'
btnCloseModal.addEventListener('click', closeModal);

//Closing a modal clicking outside box
overlay.addEventListener('click', closeModal);

//Close using escape
document.addEventListener('keydown', function (e) {
  //console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
