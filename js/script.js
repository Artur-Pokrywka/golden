'use strict';

const callUsButton = document.getElementById('contact-button');

callUsButton.addEventListener('click', displayForm);
// czy ten element to prompt czy modal??
function displayForm() {
    const contactForm = prompt();
};

// services
function getTemplateForService(serviceList) {
    return `
            <img src=${serviceList.imageSource}>
            <h3>${serviceList.name}</h3>
            <p>${serviceList.description}</p>    
    `;
}

function renderServices() {
    const servicesContainer = document.getElementById('services-container');

    for (let i = 0; i < serviceList.length; i++) {
        const rowElement = document.createElement('div');
        rowElement.classList.add('service', 'col-2');
        rowElement.innerHTML = getTemplateForService(serviceList[i]);
        servicesContainer.appendChild(rowElement);
    }
}
renderServices();

// price 
function getTemplateForPrice(priceList) {
    return `
            <h3>${priceList.standard}</h3>
            <h2>$${priceList.price}</h2>
            <h6>/${priceList.time}</h6> 
            <div class="info-container flex-column-container"></div>
            <button class="btn btn-main btn-choose">choose</button>  
    `;
};

function renderPrices() {
    const pricesContainer = document.getElementById('price-container');

    for(let i = 0; i < priceList.length; i++) {
        const rowElement = document.createElement('div');
        rowElement.classList.add('price-col', 'col-4','flex-column-container');
        rowElement.innerHTML = getTemplateForPrice(priceList[i]);
        pricesContainer.appendChild(rowElement);
        const infoRow = rowElement.querySelector('.info-container');
        renderInfo(infoRow, priceList[i].info);
    }
}
renderPrices();

// infos

const infoElements = ['Tracking isues', 'Add bugs through email', 'Notifications', 'Time tracking', 'Custom views'];

function getTemplateForInfos(infoElements) {
    return `${infoElements}`
}

// const infoContainer = document.querySelector('.info-container');

function renderInfo(infoContainer, infoElements) {
    infoElements.forEach(function(currentElement) {
        const paragraph = document.createElement('p');
        paragraph.classList.add('single-info');
        paragraph.innerHTML = getTemplateForInfos(currentElement);
        infoContainer.appendChild(paragraph);
    });
};

// some facts
function getTemplateForFacts(factsList) {
    return `
        <h2>${factsList.number}</h2>
            <hr>
        <h3>${factsList.title}</h3>
        <p class="facts-caption">${factsList.caption}</p>   
    `
};

function renderFacts() {
    const factsContainer = document.getElementById('facts-list');

    for(let i = 0; i < factsList.length; i++) {
        const rowElement = document.createElement('div');
        rowElement.classList.add('col-5', 'fact-column', 'flex-column-container');
        rowElement.innerHTML = getTemplateForFacts(factsList[i]);
        factsContainer.appendChild(rowElement);
    }
};
renderFacts(factsList);


// media items
function getTemplateForIcon(iconClass) {
    return `<a href="#"><i class=" ${iconClass}"></i></a>`;
};

function renderSocialIcons(iconClasses, containerId) {
    const socialIconContainer = document.getElementById(containerId);
    iconClasses.forEach(function(currentElement) {
        const div = document.createElement('div');
        div.classList.add('media-item');
        div.innerHTML = getTemplateForIcon(currentElement);
        socialIconContainer.appendChild(div);
    });
}

const fullIconsList = ['fab fa-twitter', 'fab fa-instagram', 'fab fa-linkedin-in', 'fab fa-facebook-f', 'fab fa-youtube', 'fab fa-google-plus', 'fas fa-ellipsis-h'];
const shortIconsList = ['fab fa-twitter', 'fab fa-linkedin-in', 'fab fa-facebook-f', 'fab fa-google-plus', 'fab fa-pinterest'];
renderSocialIcons(fullIconsList, 'jane');
renderSocialIcons(fullIconsList, 'mike');
renderSocialIcons(fullIconsList, 'anna');
renderSocialIcons(fullIconsList, 'footer-media');
renderSocialIcons(shortIconsList, 'contact-media');