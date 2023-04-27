import { fetchCategories, categLength } from './categories.js';
import { postLike, getLikes } from './likes.js';
// import likeIcon from '../assets/heart.png';

const displayLikes = async () => {
  const likesNum = await getLikes();
  for (let i = 0; i < likesNum.length; i += 1) {
    const id = document.querySelector(`[dataId="${likesNum[i].item_id}"]`);
    if (id) {
      const span = id.querySelector('h4>span');
      span.textContent = likesNum[i].likes;
    }
  }
};

const renderCategs = async () => {
  const allCategories = await fetchCategories();
  const categoriesNumber = await categLength();

  const categoriesCount = document.querySelector('.categories-count');
  const categoriesContainer = document.querySelector('.card-container');
  let itemsHTML = '';
  allCategories.forEach((el) => {
    itemsHTML += `
    <li class="itemCard" id="${el.idCategory}" dataId="${el.idCategory}">
    <img class="cardimage" src="${el.strCategoryThumb}" alt="food Image">
        <h3>${el.strCategory}</h3>
        <h4 >Likes (<span>0</span>)
        <p class="like-icon">&#10084;<p></h4>
        <button type="button" class="btn btn-category">Comment</button>
    </li>
    `;
  });
  categoriesCount.insertAdjacentHTML('afterbegin', categoriesNumber);
  categoriesContainer.insertAdjacentHTML('beforeend', itemsHTML);
  const likeButtons = document.querySelectorAll('.like-icon');
  console.log(likeButtons)
  likeButtons.forEach((like) => {
    like.addEventListener('click', async (e) => {

      const id = e.target.parentNode.parentNode.getAttribute('dataId');

      await postLike(id);
      setTimeout(() => {
        getLikes(allCategories);
      }, 1000);

      await displayLikes();
    });
  });

  displayLikes();
};

export { renderCategs, displayLikes };