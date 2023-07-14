const refs = {
  categories: document.getElementById('categories'),
  items: document.getElementsByClassName('item'),
};
console.log(`Number of categories: ${refs.categories.children.length}`);
console.log(refs.categories.children);
