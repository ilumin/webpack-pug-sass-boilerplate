import 'normalize.css';
import './index.scss';

import createUl from '../../components/menu/menu';

var menu = createUl(['Индекс', 'Обо мне', 'Портфолио']);
document.body.appendChild(menu);

