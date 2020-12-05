/* eslint-disable import/no-duplicates */
/* eslint-disable no-use-before-define */
import { countDigits } from './validateLuhna';
import validate from './validateLuhna';
import checkNumCard from './cardChecker';

const button = document.querySelector('.validate-button');
const input = document.querySelector('.validate-input');
const cards = document.querySelectorAll('.card');
const message = document.querySelector('.message');

button.addEventListener('click', () => {
  // eslint-disable-next-line radix
  if (countDigits(parseInt(input.value)) !== 16) {
    message.innerText = 'Card number is not correct';
  } else if (validate(input.value)) {
    message.innerText = 'Card exists';
  } else {
    message.innerText = 'Card doesnt exist';
  }
});

input.addEventListener('input', () => {
  const cardsArr = Array.from(cards);
  if (input.value) {
    cardsArr.forEach((item) => {
      item.classList.add('hide');
    });
  } else if (!input.value) {
    cardsArr.forEach((item) => {
      item.classList.remove('hide');
      message.innerText = '';
    });
  }
  // eslint-disable-next-line radix
  if (countDigits(parseInt(input.value)) === 16) {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of cardsArr) {
      if (item.getAttribute('data-id') === checkNumCard(input.value)) {
        item.classList.remove('hide');
      }
    }
  }
});
