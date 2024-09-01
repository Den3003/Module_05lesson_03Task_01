'use strict';

const toDoList = document.querySelector('.js-list');

const delLastChildElement = (list) => {
  if (list.lastElementChild) {
    list.lastElementChild.remove();
  }
};

const clearItemsList = list => list.innerHTML = '';

const addListItem = () => {
  const userString = prompt('Введите строку', '');

  if (userString === null || userString === 'exit') {
    return;
  }

  switch (true) {
    case userString.trim() === '':
      return addListItem();

    case userString === 'del':
      delLastChildElement(toDoList);
      break;

    case userString === 'clear':
      clearItemsList(toDoList);
      break;
    default:
      toDoList.insertAdjacentHTML('beforeend', `<li>${userString}</li>`);
  };

  addListItem();
};

addListItem();
