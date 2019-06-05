'use strict';

const callUsButton = document.getElementById('contact-button');

callUsButton.addEventListener('click', displayForm);
// czy ten element to prompt czy modal??
function displayForm() {
    const contactForm = prompt();
};

// services
const serviceDescriprion = 'Praesent metus urna, feugiat placerat elementum';
const serviceList = [
    {
        imageSource: './images/services/quality.png',
        name: "high quality design",
        description: serviceDescriprion
    },
    {
        imageSource: './images/services/design.png',
        name: "modern design",
        description: serviceDescriprion
    },
    {
        imageSource: './images/services/updates.png',
        name: "regular updates",
        description: serviceDescriprion
    },
    {
        imageSource: './images/services/support.png',
        name: "fast and free support",
        description: serviceDescriprion
    },
];

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
const priceList = [
    {
        standard: 'Express',
        price: '9.99',
        time: 'month',
    },
    {
        standard: 'Standard',
        price: '14.99',
        time: 'month',
    },
    {
        standard: 'luxe',
        price: '19.99',
        time: 'month',
    },
    {
        standard: 'premium',
        price: '9.99',
        time: 'month',
    },
];

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
    }
}
renderPrices();

const infoArray = ['Tracking isues', 'Add bugs through email', 'Notifications', 'Time tracking', 'Custom views'];

function getTemplateForInfos(infoElement) {
    return `${infoElement}`
}

function renderInfos(infoElements) {
    const infoContainer = document.querySelector('.info-container');

    infoElements.forEach(function(currentElement) {
        const paragraph = document.createElement('p');
        paragraph.classList.add('single-info');
        paragraph.innerHTML = getTemplateForInfos(currentElement);
        infoContainer.appendChild(paragraph);
    });

}
renderInfos(infoArray);

// some facts
const factsDescription = 'Praesentmetus urna, feugiat a placerat elementum at leo';

const factsList = [
    {
        number: '1000',
        title: 'design projects released',
        caption: factsDescription
    },
    {
        number: '900',
        title: 'photos',
        caption: factsDescription
    },
    {
        number: '500',
        title: 'marketing ideas',
        caption: factsDescription
    },
    {
        number: '100',
        title: 'exhibitions',
        caption: factsDescription
    },
];

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
renderFacts();


// media items
function getTemplateForIcon(iconClass) {
    return `<a href="#"><i class="fab ${iconClass}"></i></a>`;
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
const fullIconsList = ['fa-twitter', 'fa-instagram', 'fa-linkedin-in', 'fa-facebook-f', 'fa-youtube', 'fa-google-plus', 'fa-ellipsis-h'];
const shortIconsList = ['fa-twitter', 'fa-linkedin-in', 'fa-facebook-f', 'fa-google-plus', 'fa-pinterest'];
renderSocialIcons(fullIconsList, 'jane');
renderSocialIcons(fullIconsList, 'mike');
renderSocialIcons(fullIconsList, 'anna');
renderSocialIcons(fullIconsList, 'footer-media');
renderSocialIcons(shortIconsList, 'contact-media');