const inputRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

inputRef.addEventListener('input', e => {
  return (textRef.style.fontSize = `${e.currentTarget.value}px`);
});
