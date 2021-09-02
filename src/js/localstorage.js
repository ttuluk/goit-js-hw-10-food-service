
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
// localStorage.setItem('theme', JSON.stringify(Theme));
// const saveData = localStorage.getItem('theme');
// const parseData = JSON.parse(saveData);
// console.log(parseData);


const bodyEl = document.querySelector('body');
const themeSwitchEl = document.querySelector('#theme-switch-toggle');

console.log(bodyEl);
console.log(themeSwitchEl);

themeSwitchEl.addEventListener('change', addClassTheme);
const themeLightClass = Theme.LIGHT;
const themeDarkClass = Theme.DARK;

const classOfBody = bodyEl.className;
// console.log(classOfBody);

// const defaultTheme = bodyEl.classList.add(themeLightClass);

function addClassTheme(evt) {

    bodyEl.classList.add(themeDarkClass);
    bodyEl.classList.remove(themeLightClass);
    localStorage.setItem('theme', themeDarkClass)
    themeSwitchEl.addEventListener('change', removeClassTheme);


};
function removeClassTheme(evt) {
    bodyEl.classList.replace(themeDarkClass, themeLightClass);
    localStorage.removeItem('theme');
  localStorage.setItem('theme', themeLightClass);

};

