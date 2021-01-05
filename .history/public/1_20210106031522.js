const times = [];
const leftTimes = [];
const oneDay = 86400;

const time = new Date();
const hour = time.getHours();
const min = time.getMinutes();
const cho = (hour * 60 + min) * 60;

respawn.forEach((t) => {
  times.push(
    (Number(t.textContent.substr(0, 2)) * 60 +
      Number(t.textContent.substr(4, 6))) *
      60,
  );
});

times.map((t)=>{
    if(){
        leftTimes.push(t+(oneDay-cho))
    }else{
        leftTimes.push(t-cho)
    }
})