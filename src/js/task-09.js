function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeColor() {
  refs.textSpan.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = refs.textSpan.textContent;
}

const refs = {
  body: document.querySelector('body'),
  button: document.querySelector('.change-color'),
  textSpan: document.querySelector('.color'),
};

refs.button.addEventListener('click', changeColor);
