function contactPage() {
    const mainMenu = document.createElement('div');
    mainMenu.classList.add('mainMenu');
    content.appendChild(mainMenu);
    const container = document.createElement('div');
    container.classList.add('container');
    mainMenu.appendChild(container);
    makeSparkle();
    const whiteContainer = document.createElement('div');
    whiteContainer.classList.add('white-container-second');
    container.appendChild(whiteContainer);
    makeSparkle();
    makeSparkle();
    makeSparkle();
    const tagName = document.createElement('div');
    tagName.classList.add('tag-name-contact');
    whiteContainer.appendChild(tagName);
    const containerInfo = document.createElement('div');
    containerInfo.classList.add('container-info');
    whiteContainer.appendChild(containerInfo);
    const map = document.createElement('div');
    map.classList.add('map');
    containerInfo.appendChild(map);
    const containerTexts = document.createElement('div');
    containerTexts.classList.add('container-texts');
    containerInfo.appendChild(containerTexts);
    const location = document.createElement('p');
    location.classList.add('location');
    location.textContent = 'Liyue Harbor'
    containerTexts.appendChild(location);
    const time = document.createElement('p');
    time.classList.add('time');
    time.textContent = '24/7 hrs';
    containerTexts.appendChild(time);
    const mail = document.createElement('p');
    mail.classList.add('mail');
    mail.textContent = 'wanminRest@fake.com';
    containerTexts.appendChild(mail);
    const quote = document.createElement('p');
    quote.classList.add('quote');
    quote.textContent = '"Chefmao is always happy to serve you"';
    whiteContainer.appendChild(quote);
    const vector = document.createElement('div');
    vector.classList.add('vector');
    mainMenu.appendChild(vector);

    function makeSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        container.appendChild(sparkle);
    };
}

export default contactPage;