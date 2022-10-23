import './index.html';
import './index.scss';
import code from './img/code.png';
import { multi, sum } from './modules/calc';

const imgWrap = document.querySelector('.img');
const img = new Image();
img.src = code;
img.width = 700;
if (imgWrap instanceof HTMLDivElement) {
  imgWrap.append(img);
}

console.log(multi(3, 4));
console.log(sum(3, 4));
