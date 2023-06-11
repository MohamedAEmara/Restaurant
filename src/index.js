
console.log(`I'm from src/index.js`);

console.log('end of index.js');
console.log('end of index.js');
// const body = document.querySelector('body');
const content = document.getElementById('content');


const header = document.createElement('div');
const headerText = document.createElement('div');
const pages = document.createElement('div');
const center = document.createElement('div');

const one = document.createElement('div');
const two = document.createElement('div');
const three = document.createElement('div');

const footer = document.createElement('div');
const footerText = document.createElement('div');
const githubImg = document.createElement('img');

// one.classList.add('page');
// two.classList.add('page');
// three.classList.add('page');
// content.classList.add('content');
// header.classList.add('header');
// headerText.classList.add('headerText');
// pages.classList.add('pages');
// center.classList.add('center');
// one.classList.add('one');
// two.classList.add('two');
// three.classList.add('three');
// footer.classList.add('footer');
// githubImg.classList.add('githubImg');
// footerText.classList.add('footerText');


one.setAttribute('id', 'page');
two.setAttribute('id', 'page');
three.setAttribute('id', 'page');
content.setAttribute('id', 'content');
header.setAttribute('id', 'header');
headerText.setAttribute('id', 'headerText');
pages.setAttribute('id', 'pages');
center.setAttribute('id', 'center');
one.setAttribute('id', 'one');
two.setAttribute('id', 'two');
three.setAttribute('id', 'three');
footer.setAttribute('id', 'footer');
githubImg.setAttribute('id', 'githubImg');
footerText.setAttribute('id', 'footerText');

githubImg.src = "/dist/img/github.jpg";

pages.appendChild(one);
pages.appendChild(two);
pages.appendChild(three);

footer.appendChild(footerText);
footer.appendChild(githubImg);

header.appendChild(headerText);
header.appendChild(pages);
content.appendChild(header);
content.appendChild(center);
footer.appendChild(githubImg);
content.appendChild(footer)

console.log('end of index.js');



one.innerHTML = "Home";
two.innerHTML = "Menu";
three.innerHTML = "Contacts";


console.log('end of index.js');


footerText.innerHTML = "All Rights Reserved © Mohamed Emara 2023 "

headerText.innerHTML = "Sakalanse Restaurant";

footer.classList.add('footer');

console.log('end of index.js');


function showHome() {
    const homeTab = document.createElement('div');
    homeTab.innerHTML = "I'm home";
    console.log('showHome called');

    while(center.hasChildNodes()) {
        center.firstChild.remove();
    }
    // center.appendChild(homeTab);

    const line1 = document.createElement('div');
    const line2 = document.createElement('div');
    const chef = document.createElement('img');
    const line3 = document.createElement('div');

    line1.innerHTML = "Best pizza in your country"
    line2.innerHTML = "Made with passion since 2023";
    line3.innerHTML = "Order online or visit us!";
    chef.src = "/dist/img/github.jpg";

    center.appendChild(line1);
    center.appendChild(line2);
    center.appendChild(chef);
    center.appendChild(line3);

}

function showMenu() {
    const menuTab = document.createElement('div');
    menuTab.innerHTML = "I'm menu";
    console.log('showMenu called');

    while(center.hasChildNodes()) {
        center.firstChild.remove();
    }
    center.appendChild(menuTab);
}

function showContacts() {
    const contactsTab = document.createElement('div');
    contactsTab.innerHTML = "I'm contacts";
    console.log('showHome called');

    while(center.hasChildNodes()) {
        center.firstChild.remove();
    }
    center.appendChild(contactsTab);
}



//// Handle Clicks on Tabs

const home = document.getElementById('one');
const menu = document.getElementById('two');
const contacts = document.getElementById('three');
console.log("All lines are working properly");

home.addEventListener('click', () => {
    showHome();
});

menu.addEventListener('click', () => {
    showMenu();
});

contacts.addEventListener('click', () => {
    showContacts();
});



