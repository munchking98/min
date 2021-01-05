const times = [];
const leftTimes = [];
respawn.forEach((t) => {
  times.push(
    (Number(t.textContent.substr(0, 2)) * 60 +
      Number(t.textContent.substr(4, 6))) *
      60,
  );
});
