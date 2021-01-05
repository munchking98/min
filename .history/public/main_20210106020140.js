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
