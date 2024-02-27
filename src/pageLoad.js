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

    for (let i = 1; i < petals.length; i++) {
        const petal = petals[i];
        petal.addEventListener('click', changePage);
        petal.addEventListener('mouseover', displayInfo);
        petal.addEventListener('mouseleave', removeInfo);
    };

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
        } else if (scrollDirection === 'bottom'){
            btn.style.top = '11vh';
            btn.style.right = '318px';
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
    menuTitle.textContent = 'Menu';
    menuHeader.appendChild(menuTitle);
    menuPage.appendChild(menuHeader);


    //const about = document.createElement('p');
    //about.textContent = 'Welcome to RoseBud Saloon, experience our thoughtfully curated menu, highlighting locally sourced ingredients. With our cozy ambiance and attentive service, each visit promises a memorable dining journey. Join us at Holme for an unforgettable gastronomic adventure.'

}