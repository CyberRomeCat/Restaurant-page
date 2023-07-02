
function headline () {
    const content = document.getElementById('content');
    const headline = document.createElement('div');
    headline.textContent = 'BON APPETITE!!';
    headline.classList.add('headline');
    content.appendChild(headline);
}

export default headline;