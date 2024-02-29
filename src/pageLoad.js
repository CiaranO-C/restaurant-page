export { pageLoad };

import LogoCenter from './logo-center.svg';
import LogoTop from './logo-top.svg';
import LogoRight from './logo-right.svg';
import LogoBottom from './logo-bottom.svg';
import LogoLeft from './logo-left.svg';

function pageLoad() {
    const leftCol = document.createElement('div');
    const centerCol = document.createElement('div');
    const rightCol = document.createElement('div');
    const menuPage = document.createElement('div');

    leftCol.classList.add('leftCol');
    centerCol.classList.add('centerCol');
    rightCol.classList.add('rightCol');
    menuPage.classList.add('menuPage');

    document.body.append(leftCol, centerCol, rightCol, menuPage);

    //timer needed to allow dom elements to render
    setTimeout(() => {
        centerCol.scrollIntoView({ behavior: 'auto', block: 'end' });
    }, 100);

    window.addEventListener('resize', () => {
        centerCol.scrollIntoView({ behavior: 'smooth', block: 'end' });
        removeReturnBtn();
    })



    const logoCenter = document.createElement('img');
    logoCenter.classList.add('center');
    logoCenter.src = LogoCenter;

    const petals = [];
    const logoTop = document.createElement('img');
    const logoRight = document.createElement('img');
    const logoBottom = document.createElement('img');
    const logoLeft = document.createElement('img');

    logoTop.classList.add('petal', 'top');
    logoTop.id = 'top';
    logoRight.classList.add('petal', 'right');
    logoRight.id = 'right';
    logoBottom.classList.add('petal', 'bottom');
    logoBottom.id = 'bottom';
    logoLeft.classList.add('petal', 'left');
    logoLeft.id = 'left';

    logoTop.src = LogoTop;
    logoRight.src = LogoRight;
    logoBottom.src = LogoBottom;
    logoLeft.src = LogoLeft;

    petals.push(logoTop, logoRight, logoBottom, logoLeft);
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');
    centerCol.appendChild(logoContainer);
    logoContainer.appendChild(logoCenter);
    setTimeout(() => {
        petals.forEach((petal, index) => {
            setTimeout(() => {
                logoContainer.appendChild(petal);
            }, 400 * (index + 1)); // Each petal waits for previous one
        });
    }, 2100);


    const header = document.querySelector('header');

    const restaurantName = document.createElement('h1');
    restaurantName.id = 'name';
    restaurantName.textContent = 'The RoseBud';

    setTimeout(() => {
        header.appendChild(restaurantName)
    }, 4300);


    setTimeout(() => {
        for (let i = 1; i < petals.length; i++) {
            const petal = petals[i];
            petal.addEventListener('click', changePage);
            petal.addEventListener('mouseover', displayInfo);
            petal.addEventListener('mouseleave', removeInfo);

            petal
        };
    }, 4300);


    function changePage(e) {
        let page;
        const petal = e.target;
        if (petal.id !== 'return') {
            let oppositeId;
            let returnBtn;
            if (petal.id === 'left') {
                page = document.querySelector('.leftCol');
                returnBtn = document.querySelector('#right')
            } else if (petal.id === 'right') {
                page = document.querySelector('.rightCol');
                returnBtn = document.querySelector('#left');
            } else if (petal.id === 'bottom') {
                page = document.querySelector('.menuPage');
                returnBtn = document.querySelector('#top');
                const menus = document.querySelector('.menuContainer');
                menus.scrollTop = 0;
            } else {
                oppositeId = 'top';
            }
            getReturnBtn(petal.id, returnBtn);
        } else {
            page = document.querySelector('.centerCol');
            console.log(petal.id);
        }
        page.scrollIntoView({ behavior: 'smooth', block: 'end' });
    };

    function removeReturnBtn() {
        const buttons = document.querySelectorAll('.returnBtn');
        buttons.forEach(btn => btn.remove());
    };

    function getReturnBtn(scrollDirection, returnBtn) {
        const btn = returnBtn.cloneNode();
        btn.id = 'return';
        btn.classList.add('returnBtn');
        if (scrollDirection === 'left') {
            btn.style.right = '16px';
        } else if (scrollDirection === 'right') {
            btn.style.left = '16px';
        } else if (scrollDirection === 'bottom') {

        }
        document.body.appendChild(btn);

        btn.addEventListener('click', (e) => {
            changePage(e);
            removeReturnBtn();
        }, { once: true })
    }

    function removeInfo() {
        const info = document.querySelectorAll('.info');
        info.forEach(elem => elem.remove());
    }

    function displayInfo(e) {
        const petal = e.target;
        const id = petal.id;
        const info = document.createElement('span');
        info.classList.add('info');
        const rect = petal.getBoundingClientRect();

        if (id === 'left') {
            info.textContent = 'About Us';
            info.style.left = `${rect.left - 100}px`;
        } else if (id === 'right') {
            info.textContent = 'Contact Us';
            info.style.left = `${rect.right + 20}px`;
        } else {
            info.textContent = 'Menu';
            info.style.bottom = `-16px`;
        }

        logoContainer.appendChild(info);
    }


    /*logoLeft.addEventListener('click', () => {
       logoRight.classList.toggle('right', false);
       logoRight.classList.toggle('right-transform', true);
    
       logoRight.addEventListener('click', returnToMain)
    });*/

    function returnToMain(e) {
        const returnBtn = e.target;

        petals.forEach(petal => {
            petal.addEventListener('mouseover', displayInfo)
            petal.addEventListener('mouseleave', removeInfo)
        })

        if (returnBtn.id !== 'top') {
            returnBtn.addEventListener('click', changePage);
        }
    };


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

    const lunchMenu = [
        {
            title: "Garden Salad",
            description: "Fresh mixed greens, cherry tomatoes, cucumbers, and balsamic vinaigrette",
            price: "$6.99",
            category: "starter"
        },
        {
            title: "Vegetable Spring Rolls",
            description: "Crispy spring rolls filled with fresh vegetables, served with sweet chili sauce",
            price: "$8.99",
            category: "starter"
        },
        {
            title: "Soup of the Day",
            description: "Chef's daily selection of homemade soup, served with crusty bread",
            price: "$5.99",
            category: "starter"
        },
        {
            title: "Grilled Chicken Breast",
            description: "Juicy grilled chicken breast served with roasted vegetables and mashed potatoes",
            price: "$14.99",
            category: "main"
        },
        {
            title: "Pasta Primavera",
            description: "Linguine pasta tossed with seasonal vegetables in a light garlic sauce",
            price: "$12.99",
            category: "main"
        },
        {
            title: "Beef Burger",
            description: "Angus beef patty topped with lettuce, tomato, onion, and your choice of cheese, served with fries",
            price: "$13.99",
            category: "main"
        }
    ];

    const dinnerMenu = [
        {
            title: "Caprese Salad",
            description: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze",
            price: "$9.99",
            category: "starter"
        },
        {
            title: "Spinach Artichoke Dip",
            description: "Creamy spinach and artichoke dip served with crispy tortilla chips",
            price: "$10.99",
            category: "starter"
        },
        {
            title: "Stuffed Mushrooms",
            description: "Mushroom caps filled with a savory blend of cream cheese, garlic, and herbs",
            price: "$8.99",
            category: "starter"
        },
        {
            title: "Grilled Ribeye Steak",
            description: "Juicy ribeye steak seasoned and grilled to perfection, served with mashed potatoes and steamed vegetables",
            price: "$24.99",
            category: "main"
        },
        {
            title: "Lemon Herb Roasted Chicken",
            description: "Tender roasted chicken marinated in lemon and herbs, served with wild rice and roasted vegetables",
            price: "$18.99",
            category: "main"
        },
        {
            title: "Pan-Seared Salmon",
            description: "Fresh salmon fillet pan-seared with a lemon dill sauce, served with quinoa and sautéed spinach",
            price: "$21.99",
            category: "main"
        },
        {
            title: "New York Cheesecake",
            description: "Classic creamy cheesecake topped with fresh strawberries",
            price: "$7.99",
            category: "dessert"
        },
        {
            title: "Chocolate Lava Cake",
            description: "Warm chocolate cake with a gooey molten chocolate center, served with vanilla ice cream",
            price: "$8.99",
            category: "dessert"
        },
        {
            title: "Tiramisu",
            description: "Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder",
            price: "$9.99",
            category: "dessert"
        }
    ];

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
        if (menu.id === 'Dinner') {menuItemsContainer.appendChild(deserts)};
        menu.append(menuHeader, menuItemsContainer);
    };


    generateMenu(menuLeft);
    generateMenu(menuRight);

    menuContainer.append(menuLeft, menuRight);

    menuPage.append(menuHeader, menuContainer);



    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('aboutContainer');
    const aboutTitle = document.createElement('h4');
    aboutTitle.textContent = 'About Us';

    const about = document.createElement('p');
    about.innerHTML = 'Welcome to The RoseBud,<br>experience our thoughtfully curated menu, highlighting locally sourced ingredients. With our cozy ambiance and attentive service, you wont be dissapointed<br><br>Visit The RoseBud for an unforgettable experience'
    aboutContainer.append(aboutTitle, about);
    leftCol.append(aboutContainer);


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