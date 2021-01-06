const moleMap = document.querySelector('.map');
const delBtn = document.querySelectorAll('.delBtn');
const timer = document.querySelector('.time');
const lefts = document.querySelectorAll('.lefts');
const respawn = document.querySelectorAll('.respawn');

const time = new Date();
const hour = time.getHours();
const min = time.getMinutes();

const times = [];
respawn.forEach((t) => {
  times.push(
    (Number(t.textContent.substr(0, 2)) * 60 +
      Number(t.textContent.substr(4, 6))) *
      60,
  );
});
const oneDay = 86400;
const cho = (hour * 60 + min) * 60;
const leftTimes = [];
times.map((t) => {
  if (t + cho <= oneDay) {
    leftTimes.push(t + (oneDay - cho));
    // leftTimes.push(t - cho);
  } else {
    leftTimes.push(t - cho);
  }
});
let load = 30;
const state = {
  red: 'red',
  green: 'green',
};
const gohell = 5400;
setInterval(async () => {
  try {
    const hellres = await axios.get('/hells');
    const hellData = hellres.data;
    for (let i = 0; i <= hellData.length; i++) {
      let a =
        (Number(hellData[i].respawnTime.substr(0, 2)) * 60 +
          Number(hellData[i].respawnTime.substr(4, 2))) *
          60 +
        gohell;
      const b =
        Number(hellData[i].respawnTime.substr(0, 2)) + 3 >= 24 ? a - 86400 : a;

      b <= (new Date().getHours() * 60 + new Date().getMinutes()) * 60
        ? await axios.delete(`hells/${hellData[i].moleNumber}`)
        : console.log('error');
    }
  } catch (err) {
    console.error(err);
  }
}, 60000);
setInterval(async () => {
  lefts.forEach(async (t, index) => {
    const hour = Math.floor(leftTimes[index] / 60 / 60);
    const min = Math.floor((leftTimes[index] / 60) % 60);
    t.textContent = `${hour < 10 ? `0${hour}` : hour}:${
      min < 10 ? `0${min}` : min
    }`;
    leftTimes[index] -= 1;
    const hellState = state.green;
    if (leftTimes[index] <= 0) {
      const moleNumber = t.parentNode.querySelector('td').textContent;
      const respawnTime = t.parentNode.querySelectorAll('td')[2].textContent;
      await axios.post(`/hells/`, {
        moleNumber,
        respawnTime,
        hellState,
      });
      await axios.delete(`/moles/${moleNumber}`);
      location.reload();
    }
  });

  load--;
  document.querySelector('.count').textContent = `${
    load < 10 ? `0${load}` : load
  }`;
  if (load === 0) {
    location.reload();
    load = 30;
  }
}, 1000);
document.querySelector('.reload').addEventListener('click', () => {
  location.reload();
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
(async function () {
  try {
    const res = await axios.get(`/moles`);
    const reshell = await axios.get('/hells');
    const moles = res.data;
    const hells = reshell.data;
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
  } catch (err) {
    console.error(err);
  }
})();
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
});
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
