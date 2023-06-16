
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
const link = document.createElement('a');

link.classList.add('github');
link.setAttribute('href', 'https://github.com/mohamedaemara/')
link.appendChild(githubImg);

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

githubImg.src = "../dist/img/github.jpg";

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

    chef.setAttribute('id', 'chef');
    line1.innerHTML = "Best in the world"
    line2.innerHTML = "Made with love since Ages";
    line3.innerHTML = "Order online or visit us!";
    chef.src = "../dist/img/chef.jpg";


    center.appendChild(line1);
    center.appendChild(line2);
    center.appendChild(chef);
    center.appendChild(line3);

    two.classList.remove('active');
    three.classList.remove('active');
    center.classList.remove('menu');
    one.classList.add('active');

}

function showMenu() {
    const menuTab = document.createElement('div');
    menuTab.innerHTML = "I'm menu";
    console.log('showMenu called');


    const originalChicken = document.createElement('div');
    const originalChickenText = document.createElement('div');
    const originalChickenTitle = document.createElement('div');
    const originalChickenImg = document.createElement('img');

    originalChickenText.innerHTML = "Big ben sauce, london eye sauce, lettuce and pickled cucumber.";
    originalChickenTitle.innerHTML = "Original Chicken";

    originalChicken.appendChild(originalChickenImg);
    originalChicken.appendChild(originalChickenTitle);
    originalChicken.appendChild(originalChickenText);


    const smash = document.createElement('div');
    const smashText = document.createElement('div');
    const smashTitle = document.createElement('div');
    const smashImg = document.createElement('img');

    smashText.innerHTML = "Smash Burger with Big ben sauce, ranch sauce, lettuce, tomatoes, and pickled cucumber.";
    smashTitle.innerHTML = "Smash Burger";

    smash.appendChild(smashImg);
    smash.appendChild(smashTitle);
    smash.appendChild(smashText);

    const meatShawrma = document.createElement('div');
    const meatShawrmaText = document.createElement('div');
    const meatShawrmaTitle = document.createElement('div');
    const meatShawrmaImg = document.createElement('img');

    meatShawrmaText.innerHTML = "Meat shawerma slices, onion, parsley, mint, turnip and sesame paste salad.";
    meatShawrmaTitle.innerHTML = "Meat Shawerma";

    meatShawrma.appendChild(meatShawrmaImg);
    meatShawrma.appendChild(meatShawrmaTitle);
    meatShawrma.appendChild(meatShawrmaText);

    const boxOffer = document.createElement('div');
    const boxOfferText = document.createElement('div');
    const boxOfferTitle = document.createElement('div');
    const boxOfferImg = document.createElement('img');

    boxOfferText.innerHTML = "1 Medium sandwich of your choice, 2 bites hawawshi, 1 crispy piece, potato bites, pickles, sauce, fried bread and Coca-Cola Action";
    boxOfferTitle.innerHTML = "Box Offer";

    boxOffer.appendChild(boxOfferImg);
    boxOffer.appendChild(boxOfferTitle);
    boxOffer.appendChild(boxOfferText);

    const familyBox = document.createElement('div');
    const familyBoxText = document.createElement('div');
    const familyBoxTitle = document.createElement('div');
    const familyBoxImg = document.createElement('img');

    familyBoxText.innerHTML = "6 Large bites sandwiches of your choice, 10 hawawshi bites, 2 French fries with cheddar cheese platters, 1 Coca-Cola liter, pickles, garlic dip, sesame paste salad, sauce and roasted bread";
    familyBoxTitle.innerHTML = "Family Box";

    familyBox.appendChild(familyBoxImg);
    familyBox.appendChild(familyBoxTitle);
    familyBox.appendChild(familyBoxText);

    const pepperoni = document.createElement('div');
    const pepperoniText = document.createElement('div');
    const pepperoniTitle = document.createElement('div');
    const pepperoniImg = document.createElement('img');

    pepperoniText.innerHTML = "Loaded with Pepperoni and Extra Mozzarella Cheese";
    pepperoniTitle.innerHTML = "Pepperoni Pizza";

    pepperoni.appendChild(pepperoniImg);
    pepperoni.appendChild(pepperoniTitle);
    pepperoni.appendChild(pepperoniText);


    const bbqPoppers = document.createElement('div');
    const bbqPoppersText = document.createElement('div');
    const bbqPoppersTitle = document.createElement('div');
    const bbqPoppersImg = document.createElement('img');

    bbqPoppersText.innerHTML = "Chicken Poppers, Beef Bacon, Onions, Ranch Sauce with BBQ Sauce Drizzled on top.";
    bbqPoppersTitle.innerHTML = "BBQ Poppers Pizza";

    bbqPoppers.appendChild(bbqPoppersImg);
    bbqPoppers.appendChild(bbqPoppersTitle);
    bbqPoppers.appendChild(bbqPoppersText);
    


    while(center.hasChildNodes()) {
        center.firstChild.remove();
    }
    // center.appendChild(menuTab);

    center.appendChild(meatShawrma);
    center.appendChild(originalChicken);
    // center.appendChild(boxOffer);
    // center.appendChild(familyBox);
    center.appendChild(pepperoni);
    center.appendChild(bbqPoppers);
    center.appendChild(smash);

    bbqPoppersImg.src = "/dist/img/bbq.jpg";
    smashImg.src = "dist/img/smash.jpg";
    pepperoniImg.src = "../dist/img/pepperoni.jpg";
    originalChickenImg.src = "../dist/img/chicken.jpg";
    meatShawrmaImg.src = "../dist/img/shawerma.jpg";

    bbqPoppersImg.classList.add('food');
    smashImg.classList.add('food');
    pepperoniImg.classList.add('food');
    originalChickenImg.classList.add('food');
    meatShawrmaImg.classList.add('food');

    bbqPoppers.classList.add('card');
    smash.classList.add('card');
    pepperoni.classList.add('card');
    originalChicken.classList.add('card');
    meatShawrma.classList.add('card');

    bbqPoppersTitle.classList.add('title');
    smashTitle.classList.add('title');
    pepperoniTitle.classList.add('title');
    originalChickenTitle.classList.add('title');
    meatShawrmaTitle.classList.add('title');
    
    bbqPoppersText.classList.add('text');
    smashText.classList.add('text');
    pepperoniText.classList.add('text');
    originalChickenText.classList.add('text');
    meatShawrmaText.classList.add('text');


    three.classList.remove('active');
    one.classList.remove('active');
    center.classList.add('menu');
    two.classList.add('active');
}

function showContacts() {
    const contactsTab = document.createElement('div');
    // contactsTab.innerHTML = "I'm contacts";
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
    mailText.innerHTML = "contact@sakalance.com";

    addressIcon.src = "../../dist/img/add.png";
    phoneIcon.src = "img/phone.png";
    mailIcon.src = "img/email.png";

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
    }
    center.appendChild(address);
    center.appendChild(phone);
    center.appendChild(mail);

    one.classList.remove('active');
    two.classList.remove('active');
    center.classList.add('contacts');
    three.classList.add('active');
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



