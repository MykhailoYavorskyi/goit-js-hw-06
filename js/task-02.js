const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ulIngredientsRef = document.getElementById('ingredients');

const elements = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add = 'item';

  return liEl;
});

ulIngredientsRef.append(...elements);
