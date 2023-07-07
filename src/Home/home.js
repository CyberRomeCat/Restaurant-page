function homePage() {
    const main = document.createElement('div');
    main.classList.add('main');
    content.appendChild(main);
    const img = document.createElement('div');
    img.setAttribute('id','img');
    main.appendChild(img); 
    const text = document.createElement('p');
    text.classList.add('text');
    text.textContent = 'Flavoursome Classic Dishes that comes with a Twist';
    main.appendChild(text);
    const box = document.createElement('div');
    box.classList.add('box');
    main.appendChild(box);
    const box2 = document.createElement('div');
    box2.classList.add('box2');
    main.appendChild(box2);
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = 'MENU';
    main.appendChild(btn);
    const img2 = document.createElement('div');
    img2.setAttribute('id','img2');
    main.appendChild(img2); 
};

export default homePage;