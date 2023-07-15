const refs = {
  input: document.getElementById('name-input'),
  name: document.getElementById('name-output'),
};

refs.input.addEventListener('input', typeName);

function typeName(e) {
  refs.name.textContent = e.currentTarget.value || 'Anonymous';
}
