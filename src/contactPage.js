import { rightCol } from "./pages";

export function loadContact() {
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('contactUs');

    const infoHeader = document.createElement('h3');
    infoHeader.textContent = 'Our Info';

    const phoneContainer = document.createElement('div');
    const emailContainer = document.createElement('div');
    const addressContainer = document.createElement('div');
   
    const phoneHeader = document.createElement('h4');
    const emailHeader = document.createElement('h4');
    const addressHeader = document.createElement('h4');

    const phone = document.createElement('p');
    const email = document.createElement('p');
    const address = document.createElement('p');

   
    phoneHeader.textContent = 'Phone Number:';
    emailHeader.textContent = 'Email:';
    addressHeader.textContent = 'Address:';

    phone.textContent = '020 7123 4567';
    email.textContent = 'contact@therosebud.com';
    address.textContent = 'Galactic Sector Alpha-7, Nebula Prime, Starhaven';

    phoneContainer.append(phoneHeader, phone);
    emailContainer.append(emailHeader, email);
    addressContainer.append(addressHeader, address);

    infoContainer.append(infoHeader, phoneContainer, emailContainer, addressContainer);

    const reservationsContainer = document.createElement('div');
    reservationsContainer.classList.add('contactUs');

    const reservationHeader = document.createElement('h3');
    reservationHeader.textContent = 'Enquire for reservation';
    
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Name';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Email';

    const enquiry = document.createElement('textarea');
    enquiry.rows = '8';
    enquiry.resize = 'none';
    enquiry.placeholder = 'Enquiry';

    reservationsContainer.append(reservationHeader, nameInput, emailInput, enquiry);

    rightCol.append(infoContainer, reservationsContainer);
};