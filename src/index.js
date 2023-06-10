console.log(`I'm from src/index.js`);

// const { contentType } = require("mime-types");

// console.log(I'm from index.js);
// console.log("Hello, everybody!");
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

one.classList.add('page');
two.classList.add('page');
three.classList.add('page');

content.classList.add('content');
header.classList.add('header');
pages.classList.add('pages');
center.classList.add('center');
one.classList.add('one');
two.classList.add('two');
three.classList.add('three');
footer.classList.add('footer');
githubImg.classList.add('githubImg');
footerText.classList.add('footerText');


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



one.innerHTML = "ONE";
two.innerHTML = "TWO";
three.innerHTML = "Three";


console.log('end of index.js');
// pages.appendChild(one);
// pages.appendChild(two);
// pages.appendChild(three);
// header.appendChild(pages);
// content.appendChild(header);

// content.appendChild(center);

// content.appendChild(one);
// header.insertAdjacentElement(center);


// const githubImg = document.createElement('img');
// githubImg.src = C:\Users\EngEm\OneDrive\Documents\repos\Restaurant-Page\dist\img\GitHub.png;

footerText.innerHTML = "All Rights Reserved © Mohamed Emara 2023 "

headerText.innerHTML = "Sakalanse Restaurant";

// footer.appendChild(githubImg);

// content.appendChild(footer);
// center.insertAdjacentElement(footer);
// body.style.backgroundImage = 'url(/dist/img/background.jpg)';




footer.classList.add('footer');

console.log('end of index.js');







console.log("All lines are working properly");