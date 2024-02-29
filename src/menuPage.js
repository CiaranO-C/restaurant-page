import { menuPage } from "./pages";
import { lunchMenu } from "./lunchMenu";
import { dinnerMenu } from "./dinnerMenu";

export function loadMenus() {
    const menuHeader = document.createElement('header');
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Menus';
    menuHeader.appendChild(menuTitle);

    const menuContainer = document.createElement('div');
    const menuLeft = document.createElement('div');
    const menuRight = document.createElement('div');

    menuContainer.classList.add('menuContainer');
    menuLeft.classList.add('menu');
    menuRight.classList.add('menu');
    menuLeft.id = 'Lunch';
    menuRight.id = 'Dinner';

    function generateMenu(menu) {
        const menuHeader = document.createElement('header');
        menuHeader.classList.add('menuHeader');
        const menuTitle = document.createElement('h2');
        menuTitle.textContent = menu.id;
        menuHeader.appendChild(menuTitle);

        const menuItemsContainer = document.createElement('div');
        menuItemsContainer.classList.add('menuItemsContainer');
      
        const starters = document.createElement('div');
        const startersTitle = document.createElement('h3');
        startersTitle.textContent = 'Starters';
        starters.appendChild(startersTitle);

        const mains = document.createElement('div');
        const mainsTitle = document.createElement('h3');
        mainsTitle.textContent = 'Mains';
        mains.appendChild(mainsTitle);

        const deserts = document.createElement('div');
        const desertsTitle = document.createElement('h3');
        desertsTitle.textContent = 'Deserts';
        deserts.appendChild(desertsTitle);

        let menuItems = [];
        (menu.id === 'Lunch') ? menuItems = lunchMenu : menuItems = dinnerMenu;

        menuItems.forEach(dish => {
            const dishContainer = document.createElement('div');
            dishContainer.classList.add('dishContainer');

            const dishTitle = document.createElement('h5');
            const dishDesc = document.createElement('p');
            dishDesc.classList.add('dish');
            const price = document.createElement('p');
            price.classList.add('price');

            dishTitle.textContent = dish.title;
            dishDesc.textContent = dish.description;
            price.textContent = dish.price;

            dishContainer.append(dishTitle, dishDesc, price);
            if (dish.category === 'starter') {
                starters.appendChild(dishContainer);
            } else if (dish.category === 'main') {
                mains.appendChild(dishContainer);
            } else {
                deserts.appendChild(dishContainer);
            };
        });

        menuItemsContainer.append(starters, mains)
        if (menu.id === 'Dinner') { menuItemsContainer.appendChild(deserts) };
        menu.append(menuHeader, menuItemsContainer);
    };

    generateMenu(menuLeft);
    generateMenu(menuRight);

    menuContainer.append(menuLeft, menuRight);

    menuPage.append(menuHeader, menuContainer);
};