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
//   새로 고침 *************************************
document.querySelector('.reload').addEventListener('click', () => {
  location.reload();
});
//   ************************************************
