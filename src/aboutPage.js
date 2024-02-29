import { leftCol } from "./pages";

export function loadAbout() {
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('aboutContainer');
    const aboutTitle = document.createElement('h4');
    aboutTitle.textContent = 'About Us';

    const about = document.createElement('p');
    about.innerHTML = 'Welcome to The RoseBud,<br>experience our thoughtfully curated menu, highlighting locally sourced ingredients. With our cozy ambiance and attentive service, you wont be dissapointed<br><br>Visit The RoseBud for an unforgettable experience'
    aboutContainer.append(aboutTitle, about);
    leftCol.append(aboutContainer);
};