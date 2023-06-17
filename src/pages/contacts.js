import addImg from "../assets/add.png";
import phoneImg from "../assets/phone.png";
import mailImg from "../assets/email.png";

// const content = document.getElementById('content');


// const header = document.createElement('div');
// const headerText = document.createElement('div');
// const pages = document.createElement('div');



export default function showContacts() {
    const address = document.createElement('div');
    const addressIcon = document.createElement('img');
    const addressText = document.createElement('div');
    const phone = document.createElement('div');
    const phoneIcon = document.createElement('img');
    const phoneText = document.createElement('div');
    const mail = document.createElement('div');
    const mailIcon = document.createElement('img');
    const mailText = document.createElement('div');

    
    addressText.innerHTML = "Cairo, Egypt";
    phoneText.innerHTML = "011 2222 333";
    mailText.innerHTML = "contact@sakalanse.com";

    addressIcon.src = addImg;
    phoneIcon.src = phoneImg;
    mailIcon.src = mailImg;

    address.appendChild(addressIcon);
    address.appendChild(addressText);

    phone.appendChild(phoneIcon);
    phone.appendChild(phoneText);

    mail.appendChild(mailIcon);
    mail.appendChild(mailText);


    addressIcon.setAttribute('id', 'icon');
    mailIcon.setAttribute('id', 'icon');
    phoneIcon.setAttribute('id', 'icon');

    
    address.setAttribute('id', 'address');
    mail.setAttribute('id', 'mail');
    phone.setAttribute('id', 'phone');

    console.log('showHome called');

    while(center.hasChildNodes()) {
        center.firstChild.remove();
        console.log("in while");
    }
    
    center.appendChild(address);
    center.appendChild(phone);
    center.appendChild(mail);

    one.classList.remove('active');
    two.classList.remove('active');
    center.classList.add('contacts');
    three.classList.add('active');
    console.log("end of file");
}


