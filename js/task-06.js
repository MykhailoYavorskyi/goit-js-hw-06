const inputRef = document.getElementById("validation-input");

inputRef.addEventListener("blur", checkInputLength);

function checkInputLength() {
  if (inputRef.value.length !== Number(inputRef.dataset.length)) {
    return inputRef.classList.add("invalid");
  }
  inputRef.classList.add("valid");
  inputRef.classList.remove("invalid");
  return;
}
