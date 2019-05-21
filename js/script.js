'use strict';

var callUsButton = document.getElementById('contact-button');

callUsButton.addEventListener('click', displayForm);
// czy ten element to prompt czy modal??
function displayForm() {
    var contactForm = prompt();
};

// services
var serviceDescriprion = "Praesent metus urna, feugiat placerat elementum";

var services = [
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
    // {
    //     name: "ready for customize",
    //     description: serviceDescriprion
    // },
    // {
    //     name: "adaptive layout",
    //     description: serviceDescriprion
    // }

];

function getTemplateForService(services) {
    return `
            <h3>${services.name}</h3>
            <p>${services.description}</p>    
    `;
}

function renderServices() {
    var servicesContainer = document.getElementById('services-container');

    for (var i = 0; i < services.length; i++) {
        const rowElement = document.createElement('div');
        rowElement.classList.add('service', 'col-2');
        rowElement.innerHTML = getTemplateForService(services[i]);
        servicesContainer.appendChild(rowElement);
    }
}
renderServices();
 
 

// console.log(services[0].description);

