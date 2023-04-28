import { fetchCategories, categLength } from '../categories.js';

describe('Items (meals) Counter', () => {
  test('Display the Number of Meals', async () => {
    const mealsCount = await categLength();
    expect(mealsCount).toBe(14);
  });

  test('Display the length of the items', async () => {
    const meals = await fetchCategories();
    expect(meals).toHaveLength(14);
  });
});
