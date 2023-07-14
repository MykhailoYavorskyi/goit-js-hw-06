const refs = {
  decrementBtn: document.getElementById('counter').firstElementChild,
  incrementBtn: document.getElementById('counter').lastElementChild,
  counterValue: document.getElementById('value'),
};

function increment() {
  return refs.counterValue.textContent++;
}

function decrement() {
  return refs.counterValue.textContent--;
}

refs.decrementBtn.addEventListener('click', decrement);
refs.incrementBtn.addEventListener('click', increment);
