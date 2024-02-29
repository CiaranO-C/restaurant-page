export {leftCol, centerCol, rightCol, menuPage};

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
});