const respawn = document.querySelectorAll('.respawn');

const time = new Date();
const hour = time.getHours();
const min = time.getMinutes();
const oneDay = 86400;
let load = 30;

for (let i = 0; i <= 25; i++) {
  const num = document.createElement('div');
  num.classList.add('click');
  num.textContent = i + 1;
  moleMap.appendChild(num);
}
const content = document.querySelectorAll('.click');

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

const respawnTimes = [];
const leftTimes = [];
respawn.forEach((t) => {
  respawnTimes.push(
    (Number(t.textContent.substr(0, 2)) * 60 +
      Number(t.textContent.substr(4, 6))) *
      60,
  );
});

respawnTimes.map((t) => {
  if (t + 10800 >= oneDay) {
    if (
      new Date().getHours === 0 ||
      new Date().getHours === 1 ||
      new Date().getHours === 2
    ) {
      leftTimes.push(t - oneDay - (hour * 60 + min) * 60);
    } else {
      leftTimes.push(t + oneDay - (hour * 60 + min) * 60);
    }
  } else {
    leftTimes.push(t - (hour * 60 + min) * 60);
  }
});

setInterval(async () => {
  try {
    const hellRes = await axios.get('/hells');
    const hellData = hellRes.data;
    const a =
      (Number(hellData[i].respawnTime.substr(0, 2)) * 60 +
        Number(hellData[i].respawnTime.substr(4, 2))) *
        60 +
      gohell;
  } catch (err) {
    console.error(err);
  }
}, 60000);

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
}, 1000);
