function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsRef = document.querySelector("#controls");
const boxRef = document.querySelector("#boxes");

function createBoxes(amount) {
  let divMarkup = "";
  for (let i = 1, j = 30; i <= amount; i += 1, j += 10) {
    divMarkup += `<div style="height: ${j}px; width: ${j}px; background-color: ${getRandomHexColor()}"></div>`;
  }
  boxRef.innerHTML = divMarkup;
}
function destroyBoxes() {
  boxRef.innerHTML = "";
}

controlsRef.firstElementChild.nextElementSibling.addEventListener("click", createBoxes);
controlsRef.lastElementChild.addEventListener("click", destroyBoxes);
