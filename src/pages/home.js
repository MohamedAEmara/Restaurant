import chefImgg from "../assets/chef.jpg";


export default function showHome() {
    const homeTab = document.createElement('div');
    homeTab.innerHTML = "I'm home";
    console.log('showHome called');

    while(center.hasChildNodes()) {
        center.firstChild.remove();
    }

    const line1 = document.createElement('div');
    const line2 = document.createElement('div');
    const chef = document.createElement('img');
    const line3 = document.createElement('div');

    chef.setAttribute('id', 'chef');
    line1.innerHTML = "Best in the world"
    line2.innerHTML = "Made with love since Ages";
    line3.innerHTML = "Order online or visit us!";
    // chef.src = "../dist/img/chef.jpg";
    chef.src = chefImgg;


    center.appendChild(line1);
    center.appendChild(line2);
    center.appendChild(chef);
    center.appendChild(line3);

    two.classList.remove('active');
    three.classList.remove('active');
    center.classList.remove('menu');
    one.classList.add('active');

}
