import { getLikes } from './likes.js';

const fetchCategories = async () => {
  const results = await fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  );
  const data = await results.json();
  const { categories } = data;
  getLikes(categories);
  return categories;
};

const categLength = async () => {
  const categories = await fetchCategories();
  return categories.length;
};

export { fetchCategories, categLength };