const refs = {
  inputEl: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

refs.inputEl.value = '16';
refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.textEl.style.fontSize = `${event.currentTarget.value}px`;
}