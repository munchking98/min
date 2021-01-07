const form = document.querySelector('.pepiForm');
const add = document.querySelector('.add');

add.addEventListener('click', () => {
  const idSpan = document.createElement('span');
  const pwSpan = document.createElement('span');
  const inputId = document.createElement('input');
  const inputPw = document.createElement('input');
  const div = document.createElement('div');

  idSpan.textContent = 'ID';
  pwSpan.textContent = 'PW';
  div.appendChild(idSpan);
  div.appendChild(inputId);
  div.appendChild(pwSpan);
  div.appendChild(inputPw);
});
form.addEventListener('submit', () => {});
