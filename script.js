'use strict';

const removeClass = function (classToBeRemoved) {
  modal.classList.remove(classToBeRemoved);
  overlay.classList.remove(classToBeRemoved);
};

const addClass = function (classToBeAdded) {
  modal.classList.add(classToBeAdded);
  overlay.classList.add(classToBeAdded);
};

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', function () {
    console.log('open button clicked!');
    removeClass('hidden');
  });
}

btnCloseModal.addEventListener('click', function () {
  console.log('close button clicked');
  addClass('hidden');
});

document.addEventListener('keydown', function (events) {
  console.log('key pressed');
  console.log(events);
  if (events.key == 'Escape' && !modal.classList.contains('hidden')) {
    addClass('hidden');
  }
});

// events happen when pressing the key
// when events happen, javascript will generate an object
// we can use the properties of this object to do somethings
