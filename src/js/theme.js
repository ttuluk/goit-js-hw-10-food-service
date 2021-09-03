
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeLightClass = Theme.LIGHT;
const themeDarkClass = Theme.DARK;

const STORAGE_KEY = 'check';

const bodyEl = document.querySelector('body');
const inputThemeSwitch = document.querySelector('#theme-switch-toggle');

inputThemeSwitch.addEventListener('change', changeTheme);


function changeTheme(evt) {
  const checked = evt.target.checked;

    if (checked === true) {
      bodyEl.classList.add(themeDarkClass);
      bodyEl.classList.remove(themeLightClass);
      localStorage.setItem(STORAGE_KEY, checked)
    }

    if (checked === false) {

      bodyEl.classList.replace(themeDarkClass, themeLightClass);
      localStorage.setItem(STORAGE_KEY, checked);
  }
};

function populateInput() {
    const lo = localStorage.getItem(STORAGE_KEY);

    if (lo === 'true') {
    inputThemeSwitch.checked = true;
        bodyEl.classList.add(themeDarkClass);
    }
localStorage.removeItem(STORAGE_KEY);
}
populateInput();