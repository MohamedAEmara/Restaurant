import ppqImgg from "../assets/bbq.jpg";
import chickenImgg from "../assets/chicken.jpg";
import pepperoniImgg from "../assets/pepperoni.jpg";
import shawermaImgg from "../assets/shawerma.jpg";
import smashImgg from "../assets/smash.jpg";




export default function showMenu() {
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

    center.appendChild(meatShawrma);
    center.appendChild(originalChicken);

    center.appendChild(pepperoni);
    center.appendChild(bbqPoppers);
    center.appendChild(smash);

    bbqPoppersImg.src = ppqImgg;
    smashImg.src = smashImgg;
    pepperoniImg.src = pepperoniImgg;
    originalChickenImg.src = chickenImgg;
    meatShawrmaImg.src = shawermaImgg;

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
