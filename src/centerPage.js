import { LogoBottom, LogoCenter, LogoLeft, LogoRight, LogoTop } from './assets/images';
import { centerCol } from './pages';

export function centerPage() {
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
}

export function removeReturnBtn() {
    const buttons = document.querySelectorAll('.returnBtn');
    buttons.forEach(btn => btn.remove());
};