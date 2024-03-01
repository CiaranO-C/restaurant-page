
import { basePages } from './pages';
import { centerPage } from './centerPage';
import { loadMenus } from './menuPage';
import { loadAbout } from './aboutPage';
import { loadContact } from './contactPage';

export function pageLoad() {
basePages();  
centerPage();
loadMenus();
loadAbout();
loadContact();  
};