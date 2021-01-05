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
    for (let i = 0; i <= hellData.length; i++) {
      const a = timeMaker(hellData[i]) + gohell;
      const b =
        Number(hellData[i].respawnTime.substr(0, 2)) + 3 <= 24 ? a - 86400 : a;
      b <= (new Date().getHours() * 60 + new Date().getMinutes()) * 60
        ? await axios.delete(`hells/${hellData[i].moleNumber}`)
        : '';
    }
  } catch (err) {
    console.error(err);
  }
}, 6000);

setInterval(async () => {
  try {
    load--;
    document.querySelector('.count').textContent = `${
      load < 10 ? `0${load}` : load
    }`;
    if (load === 0) {
      location.reload();
      load = 30;
    }
  } catch (err) {
    console.error(err);
  }
}, 1000)(
  // 페이지로드
  async function () {
    try {
      const moleRes = await axios.get('/moles');
      const hellRes = await axios.get('/hells');
      const moles = moleRes.data;
      const hells = hellRes.data;
      const moleNum = [];
      for (let i = 0; i < moles.length; i++) {
        content.forEach((t) => {
          if (Number(t.textContent) === moles[i].moleNumber) {
            t.classList.add('red');
          }
        });
        moleNum.push(moles[i].moleNumber);
      }
      for (let i = 0; i < hells.length; i++) {
        content.forEach((t) => {
          if (Number(t.textContent) === hells[i].moleNumber) {
            t.classList.add('green');
          }
        });
      }
    } catch (err) {}
  },
)();

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
    if (t.classList.contains('red')) {
      return;
    } else if (t.classList.contains('green')) {
      t.classList.remove('green');
      await axios.delete(`hells/${e.target.textContent}`);
      await axios.post('/moles', {
        moleNumber,
        cutTime,
        respawnTime,
        moleState,
      });
    } else {
      await axios.post('/moles', {
        moleNumber,
        cutTime,
        respawnTime,
        moleState,
      });
    }
    location.reload();
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
