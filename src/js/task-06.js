const inputRef = document.getElementById('validation-input');

inputRef.addEventListener('blur', checkInputLength);

function checkInputLength() {
  return inputRef.value.length === Number(inputRef.dataset.length)
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
}
