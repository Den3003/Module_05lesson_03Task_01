'use strict';

const listUser = document.querySelector('.js-list');

const delLastChildElement = (list) => {
  if (list.lastElementChild) {
    list.lastElementChild.remove();
  }
};

const delItemsList = list => list.innerHTML = '';

const addListItem = () => {
  const userString = prompt('Введите строку', '');

  if (userString === null || userString === 'exit') {
    return;
  }

  switch (true) {
    case userString.trim() === '':
      return addListItem();

    case userString === 'del':
      delLastChildElement(listUser);
      break;

    case userString === 'clear':
      delItemsList(listUser);
      break;
    default:
      listUser.insertAdjacentHTML('beforeend', `<li>${userString}</li>`);
  };

  addListItem();
};

addListItem();
