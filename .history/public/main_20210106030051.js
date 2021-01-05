const moleMap = document.querySelector('.map');
const delBtn = document.querySelectorAll('.delBtn');
const timer = document.querySelector('.time');
const lefts = document.querySelectorAll('.lefts');
const respawn = document.querySelectorAll('.respawn');

for (let i = 0; i <= 25; i++) {
  const num = document.createElement('div');
  num.classList.add('click');
  num.textContent = i + 1;
  moleMap.appendChild(num);
}
const content = document.querySelectorAll('.click');

content.forEach((t) => {
  t.addEventListener('click', async (e) => {
    try {
      const time = new Date();
      const hour =
        time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
      const min =
        time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
      const moleNumber = t.textContent;
      const moleState = 'red';

      const cutTime = `${hour} : ${min} `;
      const respawnTime = `${
        new Date().getHours() + 3 >= 24
          ? `${new Date().getHours() + 3}`
          : `0${new Date().getHours() + 3 - 24}`
      } : ${min}`;

      if (t.classList.contains('red')) {
        return;
      }
      //   else if (t.classList.contains('green')) {
      //     t.classList.remove('green');
      //     await axios.delete(`hells/${e.target.textContent}`);
      //     await axios.post('/moles', {
      //       moleNumber,
      //       cutTime,
      //       respawnTime,
      //       moleState,
      //     });
      //   } else {
      //     await axios.post('/moles', {
      //       moleNumber,
      //       cutTime,
      //       respawnTime,
      //       moleState,
      //     });
      //   }
      console.log(respawnTime);
      location.reload();
    } catch (err) {
      console.error(err);
    }
  });
});
