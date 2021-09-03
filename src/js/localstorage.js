
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const themeLightClass = Theme.LIGHT;
const themeDarkClass = Theme.DARK;

const bodyEl = document.querySelector('body');
const themeSwitchEl = document.querySelector('#theme-switch-toggle');

themeSwitchEl.addEventListener('change', addClassTheme);

function addClassTheme(evt) {
  evt.preventDefault();
  if (themeSwitchEl.checked === true) {
    bodyEl.classList.add(themeDarkClass);
    bodyEl.classList.remove(themeLightClass);
    localStorage.setItem('theme', themeDarkClass)
  }
  if (themeSwitchEl.checked === false) {
    bodyEl.classList.replace(themeDarkClass, themeLightClass);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', themeLightClass);
  }
};