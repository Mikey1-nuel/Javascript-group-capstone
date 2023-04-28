// import itemCounterFunction from './ItemCount.js';

const itemCounterFunction = async (item, element) => {
  if (item === 0) {
    element.innerHTML = ' (0)';
  } else {
    element.innerHTML = ` (${item})`;
  }
};

const involvementApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const involvementApiKey = 'AEzJkDXLf7FGXWlpS77t';
const foodCards = document.querySelector('.foodCards');
const mealsArray = [];
let counter = 0;
const foodRandomSelection = {
  displayRandomFoodSelection: () => {
    const getResponse = async () => {
      while (counter < 9) {
      // eslint-disable-next-line no-await-in-loop
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/random.php',
          {
            method: 'GET',
          },
        );

        // eslint-disable-next-line no-await-in-loop
        const foodRandomdata = await response.json();
        mealsArray.push(foodRandomdata.meals);
        // eslint-disable-next-line space-infix-ops
        counter += 1;
      }
      return mealsArray;
    };
    getResponse()
      .then((mealsArray) => {
        const MealsData = mealsArray;
        foodCards.innerHTML = MealsData.map(
          (meal) => `
<div class="itemCard">
<img src="${meal[0].strMealThumb}" class="cardimage">
<div class="food-info">
<div class="sub-cont">
<div class="sub-cont2">
<p class="food-name">${meal[0].strMeal}</p>
<p class="likeSymbol" data-id=${meal[0].idMeal}>&#10084;</p>
</div>
<div class="likeCalculation">
<div class="likeCount" data-id=${meal[0].idMeal}>0</div>
<div class="likes">likes</div>
</div>
</div>
</div>
<div class="buttons">
<input type="button" class="btn" value="Comments">
</div>
</div>
`,
        ).join('');
      })
      .then(async () => {
        const likeCounterAPI = await fetch(
          `${involvementApiUrl}${involvementApiKey}/likes/`,
        )
          .then((response) => response.json())
          .then((data) => data);

        const likesCounter = foodCards.querySelectorAll('.likeCount');
        likesCounter.forEach((likeCounter) => {
          const likesId = likeCounter.getAttribute('data-id');
          const element = likeCounter;
          likeCounterAPI.forEach((likeAPI) => {
            if (likesId === likeAPI.item_id) {
              element.innerHTML = likeAPI.likes;
            }
          });
        });
        // To add or Create like when Heart is pressed
        const likesButton = foodCards.querySelectorAll('.likeSymbol');
        likesButton.forEach((likeButton) => {
          likeButton.addEventListener('click', (e) => {
          // eslint-disable-next-line max-len
            const targetCounter = e.target.parentElement.nextElementSibling.children[0].innerText;
            // eslint-disable-next-line max-len
            e.target.parentElement.nextElementSibling.children[0].innerText = +targetCounter + 1;
            fetch(`${involvementApiUrl}${involvementApiKey}/likes/`, {
              method: 'POST',
              body: JSON.stringify({
                item_id: likeButton.getAttribute('data-id'),
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            });
          });
        });
        // item counter
        const itemCounter = document.querySelector('.noOfItems');
        itemCounterFunction(counter, itemCounter);
      });
  },
};

export default foodRandomSelection;
// eslint-disable-next-line space-infix-ops
const exporting = () => {
// eslint-disable-next-line
	mealsArray;
};

window.setTimeout(exporting, 2);

export { foodRandomSelection, mealsArray };