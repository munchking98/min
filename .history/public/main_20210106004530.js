const moleMap = document.querySelector('.map');
const delBtn = document.querySelectorAll('.delBtn');
const timer = document.querySelector('.time');
const lefts = document.querySelectorAll('.lefts');
const respawn = document.querySelectorAll('.respawn');

let load = 30;
const gohell = 5400;
const oneDay = 86400;

const timeMaker = (time) => {
  (Number(time.substr(0, 2)) * 60 + Number(time.substr(4, 6))) * 60;
};

const respawnTimes = [];
const leftTimes = [];
respawn.forEach((t) => {
  respawnTimes.push(timeMkaer(t.textContent));
});
respawnTimes.map((t) => {});

setInterval(async () => {
  try {
    const hellRes = await axios.get('/hells');
    const hellData = hellRes.data;
    for (let i = 0; i <= hellData.length; i++) {}
  } catch (err) {
    console.error(err);
  }
});

// 숫자볼 선언 ************************************
for (let i = 0; i <= 25; i++) {
  const num = document.createElement('div');
  num.classList.add('click');
  num.textContent = i + 1;
  moleMap.appendChild(num);
}
const content = document.querySelectorAll('.click');
// ***********************************************

content.forEach(async (t) => {
  try {
    const time = new Date();
    const hour = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
    const min =
      time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    const moleNumber = t.textContent;
    const moleState = 'red';

    const cutTime = `${hour} : ${min} `;
    const respawnTime = `${
      new Date().getHours() + 3 <= 24
        ? `${new Date().getHours() + 3}`
        : `0${new Date().getHours() + 3 - 24}`
    } : ${min}`;
  } catch (err) {
    console.error(err);
  }
});

//   새로 고침 *************************************
document.querySelector('.reload').addEventListener('click', () => {
  location.reload();
});
//   ************************************************
// 중앙 시계 ****************************************
setInterval(() => {
  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();
  const second = time.getSeconds();
  timer.textContent = `${hour < 10 ? `0${hour}` : hour}:${
    min < 10 ? `0${min}` : min
  }:${second < 10 ? `0${second}` : second}`;
}, 1000);
// ****************************************************
// 삭제 버튼*******************************************
delBtn.forEach((t) => {
  t.addEventListener('click', async (e) => {
    try {
      const moleNumber = e.target.parentNode.querySelector('td').textContent;
      await axios.delete(`/moles/${moleNumber}`);
      location.reload();
    } catch (err) {
      console.error(err);
    }
  });
});
//******************************************************
