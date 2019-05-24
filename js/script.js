'use strict';

var callUsButton = document.getElementById('contact-button');

callUsButton.addEventListener('click', displayForm);
// czy ten element to prompt czy modal??
function displayForm() {
    var contactForm = prompt();
};

// services
var serviceDescriprion = 'Praesent metus urna, feugiat placerat elementum';
var serviceList = [
    {
        name: "high quality design",
        description: serviceDescriprion
    },
    {
        name: "modern design",
        description: serviceDescriprion
    },
    {
        name: "regular updates",
        description: serviceDescriprion
    },
    {
        name: "fast and free support",
        description: serviceDescriprion
    },
];

function getTemplateForService(serviceList) {
    return `
            <h3>${serviceList.name}</h3>
            <p>${serviceList.description}</p>    
    `;
}

function renderServices() {
    var servicesContainer = document.getElementById('services-container');

    for (let i = 0; i < serviceList.length; i++) {
        const rowElement = document.createElement('div');
        rowElement.classList.add('service', 'col-2');
        rowElement.innerHTML = getTemplateForService(serviceList[i]);
        servicesContainer.appendChild(rowElement);
    }
}
renderServices();
 
// price 
var infoArray = ['Tracking isues', 'Add bugs through email', 'Notifications', 'Time tracking', 'Custom view'];

var priceList = [
    {
        standard: 'Express',
        price: '9.99',
        time: 'month',
        moreInfo: infoArray
    },
    {
        standard: 'Standard',
        price: '14.99',
        time: 'month',
        moreInfo: infoArray
    },
    {
        standard: 'luxe',
        price: '19.99',
        time: 'month',
        moreInfo: infoArray
    },
    {
        standard: 'premium',
        price: '9.99',
        time: 'month',
        moreInfo: infoArray
    },
];

function getTemplateForPrice(priceList) {
    return `
            <h3>${priceList.standard}</h3>
            <h2>$${priceList.price}</h2>
            <h6>/${priceList.time}</h6> 
            <p class="attribute-list">${priceList.moreInfo}</p> 
            <button class="btn btn-main btn-choose">choose</button>  
    `;
};

function renderPrices() {
    var pricesContainer = document.getElementById('price-container');

    for(let i = 0; i < priceList.length; i++) {
        const rowElement = document.createElement('div');
        rowElement.classList.add('price-col', 'col-4');
        rowElement.innerHTML = getTemplateForPrice(priceList[i]);
        pricesContainer.appendChild(rowElement);
    }
}
renderPrices();

// some facts
var factsDescription = 'Praesentmetus urna, feugiat a placerat elementum at leo';

var factsList = [
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
    var factsContainer = document.getElementById('facts-list');

    for(let i = 0; i < factsList.length; i++) {
        const rowElement = document.createElement('div');
        rowElement.classList.add('col-5', 'fact-column');
        rowElement.innerHTML = getTemplateForFacts(factsList[i]);
        factsContainer.appendChild(rowElement);
    }
};
renderFacts();