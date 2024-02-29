
import { centerPage } from './centerPage';
import { loadMenus } from './menuPage';
import { loadAbout } from './aboutPage';
import { loadContact } from './contactPage';

export function pageLoad() {
  
centerPage();
loadMenus();
loadAbout();
loadContact();  
};