import menuPage from "../Menu/menu.js";

function homePage() {
    const main = document.createElement('div');
    main.classList.add('main');
    content.appendChild(main);
    const img = document.createElement('div');
    img.setAttribute('id','img');
    main.appendChild(img); 
    const outerContainer = document.createElement('div');
    outerContainer.classList.add('outer-container');
    main.appendChild(outerContainer)
    const container = document.createElement('div');
    container.classList.add('container-catchy-content');
    outerContainer.appendChild(container);
    const text = document.createElement('p');
    text.classList.add('text');
    text.textContent = 'Flavoursome Classic Dishes that comes with a Twist';
    container.appendChild(text);
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    const box2 = document.createElement('div');
    box2.classList.add('box2');
    container.appendChild(box2);
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = 'MENU';
    btn.addEventListener('click',() => {
        if (content.lastElementChild.classList == 'main' || content.lastElementChild.classList == 'mainMenu' || content.lastElementChild.classList == 'contact') {
            content.removeChild(content.lastElementChild);
        };
        menuPage();
    }); 
    container.appendChild(btn);
    const img2 = document.createElement('div');
    img2.setAttribute('id','img2');
    main.appendChild(img2); 
};

export default homePage;