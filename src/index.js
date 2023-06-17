import './style.css'
import ContactsPage from "./pages/contacts.js";
import MenuPage from "./pages/menu.js";
import HomePage from "./pages/home.js";
import githubImgg from "./assets/github.jpg";

console.log(`I'm from src/index.js`);

console.log('end of index.js');
console.log('end of index.js');
 
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
const link = document.createElement('a');

githubImg.src = githubImgg;
link.classList.add('github');
link.setAttribute('href', 'https://github.com/mohamedaemara/')
link.appendChild(githubImg);


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

// githubImg.src = "../dist/img/github.jpg";

pages.appendChild(one);
pages.appendChild(two);
pages.appendChild(three);

footer.appendChild(footerText);
// footer.appendChild(githubImg);
footer.appendChild(link);

header.appendChild(headerText);
header.appendChild(pages);
content.appendChild(header);
content.appendChild(center);
footer.appendChild(link);
content.appendChild(footer)

console.log('end of index.js');



one.innerHTML = "Home";
two.innerHTML = "Menu";
three.innerHTML = "Contacts";


console.log('end of index.js');


footerText.innerHTML = "All Rights Reserved © Mohamed Emara"

headerText.innerHTML = "Sakalanse Restaurant";

footer.classList.add('footer');

console.log('end of index.js');





//// Handle Clicks on Tabs

const home = document.getElementById('one');
const menu = document.getElementById('two');
const contacts = document.getElementById('three');
console.log("All lines are working properly");

home.addEventListener('click', () => {
    HomePage();
});

menu.addEventListener('click', () => {
    MenuPage();
});

contacts.addEventListener('click', () => {
    // showContacts();
    ContactsPage();
});



