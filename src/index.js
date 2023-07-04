import home from './Home/home.js';
import './Home/style.css';
import head from './Menu/menu.js';

function headline() {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);
    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = 'Wanmin Restaurant';
    container.appendChild(title);
    const subMenu = document.createElement('div');
    subMenu.classList.add('submenu');
    container.appendChild(subMenu);
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
        if (content.lastElementChild.classList == 'main') {
            content.removeChild(content.lastElementChild);
        }
        home();
    });

    menu.addEventListener('click', () => {
        if (content.lastElementChild.classList == 'main') {
            content.removeChild(content.lastElementChild);
        }
    });
};

headline();
home();











