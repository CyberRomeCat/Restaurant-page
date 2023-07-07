import homePage from './Home/home.js';
import './Home/style.css';
import menuPage from './Menu/menu.js';
import './Menu/style.css';
import contactPage from './Contact/contact.js';
import './Contact/style.css';

function headline() {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    header.classList.add('header');
    content.appendChild(header);
    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = 'Wanmin Restaurant';
    header.appendChild(title);
    const subMenu = document.createElement('div');
    subMenu.classList.add('submenu');
    header.appendChild(subMenu);
    const home = document.createElement('div');
    home.classList.add('tabs');
    home.textContent = 'Home';
    subMenu.appendChild(home);
    const menu = document.createElement('div');
    menu.classList.add('tabs');
    menu.textContent = 'Menu';
    subMenu.appendChild(menu);
    const contact = document.createElement('div');
    contact.classList.add('tabs');
    contact.textContent = 'Contact';
    subMenu.appendChild(contact);
    
    home.addEventListener('click',() => {
        if (content.lastElementChild.classList == 'main' || content.lastElementChild.classList == 'mainMenu' || content.lastElementChild.classList == 'contact') {
            content.removeChild(content.lastElementChild);
        };
        homePage();
    });

    menu.addEventListener('click', () => {
        if (content.lastElementChild.classList == 'main' || content.lastElementChild.classList == 'mainMenu' || content.lastElementChild.classList == 'contact') {
            content.removeChild(content.lastElementChild);
        };
        menuPage();
    });

    contact.addEventListener('click', () => {
        if (content.lastElementChild.classList == 'main' || content.lastElementChild.classList == 'mainMenu' || content.lastElementChild.classList == 'contact') {
            content.removeChild(content.lastElementChild);
        };
        contactPage();
    });
};

headline();
contactPage();










