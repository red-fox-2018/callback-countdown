const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  setInterval(function () {
    if(seconds>=0){
      let menit_puluh = Math.floor(Math.floor(seconds / 60) / 10)
      let menit_satuan = (Math.floor(seconds / 60) % 10)
      let puluh = Math.floor((seconds % 60) / 10)
      let satuan = (seconds % 60) % 10
      let waktu = `${menit_puluh} ${menit_satuan} : ${puluh} ${satuan}`
      displayCountdown(waktu)
    }
    else{
      clearInterval(seconds)      
    }
    seconds -= 1
  }, 1000);
      
}
console.log(timer(10))
module.exports = {
  timer
};
