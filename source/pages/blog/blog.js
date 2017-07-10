import 'normalize.css';
import './blog.scss';

import createUl from '../../components/menu/menu';

var menu = createUl(['Блог', 'Обо мне', 'Портфолио']);
console.dir(menu);
console.log(menu);


document.body.appendChild(menu);

console.log("in blog");