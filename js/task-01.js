const itemRef = document.getElementsByClassName("item");

const arr = [...itemRef];
console.log(`Number of categories: ${itemRef.length}`);
arr.forEach((value) => {
  console.log(`Category ${value.firstElementChild.textContent}
  Elements ${value.lastElementChild.children.length}`);
});
