import './scss/styles.scss';
import menuJson from './templates-menu/menu.json';
import menuTemplate from './templates-menu/menu.hbs'

const menuData = {
    menu: menuJson,
}
const menuHtml = menuTemplate(menuData);
document.querySelector('.js-menu').innerHTML = menuHtml;

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const checkbox = document.querySelector('#theme-switch-toggle')
const body = document.querySelector('body');
body.setAttribute('class', localStorage.getItem('theme') || Theme.LIGHT);

function switcherTheme() {

    if (event.target.checked === Theme.LIGHT) {
        body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
        return
    }

    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
}


checkbox.addEventListener('change', switcherTheme());




