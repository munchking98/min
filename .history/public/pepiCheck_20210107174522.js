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
  inputId.classList.add('id');
  inputPw.classList.add('pwd');
  div.appendChild(idSpan);
  div.appendChild(inputId);
  div.appendChild(pwSpan);
  div.appendChild(inputPw);
  form.appendChild(div);
});
const usrId = [];
const usrPw = [];

form.addEventListener('submit', async (e) => {
  try {
    e.preventDefault();
    const pepiId = document.querySelectorAll('.id');
    const pepiPwd = document.querySelectorAll('.pwd');
    pepiId.forEach((t) => {
      usrId.push(t.value);
    });
    pepiPwd.forEach((t) => {
      usrPw.push(t.value);
    });
    console.log(usrId, usrPw);
    for (let i = 0; i < usrId.length; i++) {
      const id = usrId[i];
      const pw = usrPw[i];
      //   await axios.post('/pepi', { id, pw });
      if (document.querySelector('.mable')) {
        console.log('a');
      } else {
        console.log('b');
      }
      console.log(`${i}번 완료`);
    }
  } catch (err) {
    console.error(err);
  }
});
