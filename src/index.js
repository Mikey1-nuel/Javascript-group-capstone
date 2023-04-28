import './style.css';
import { renderCategs } from './modules/renderCategs.js';
import { createPop } from './modules/comment.js';
// import { fetchCategories } from './modules/categories.js';
import { foodRandomSelection } from './modules/render.js';

document.addEventListener('DOMContentLoaded', foodRandomSelection.displayRandomFoodSelection);
window.addEventListener('DOMContentLoaded', () => {
  renderCategs();
});
window.setTimeout(createPop, 2700);
// document.addEventListener('DOMContentLoaded', fetchCategories);