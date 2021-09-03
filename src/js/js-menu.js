import templateFunction from '../templates/menu-template.hbs';
import refs from '../menu.json'

const menuEL = document.querySelector('.js-menu');

const liItem = createItem(refs);

menuEL.insertAdjacentHTML('beforeend', liItem);

function createItem(refs) {
  return refs.map(templateFunction).join(' ');
}

