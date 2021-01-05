const respawn = document.querySelectorAll('.respawn');

const time = new Date();
const hour = time.getHours();
const min = time.getMinutes();
const oneDay = 86400;
let load = 30;

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
  } catch (err) {
    console.error(err);
  }
}, 60000);

setInterval(async () => {
  try {
  } catch (err) {
    console.error(err);
  }
}, 1000);
