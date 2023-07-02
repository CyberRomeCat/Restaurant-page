import './style.css';
import headline from './home.js';

headline();

console.log('it is working');
alert('it tws evry saved file what');

const content = document.getElementById('content');

const text = document.createElement('div');
text.textContent = 'Delicious pasta dishes of all kind!, you name it we have it!!'
text.classList.add('text')
content.appendChild(text);

const img = document.createElement('img');
img.setAttribute('id','img');
content.appendChild(img);






