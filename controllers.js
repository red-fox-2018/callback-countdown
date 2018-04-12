const { displayCountdown } = require("./views");

const timer = seconds => {
  var interval = setInterval(function () {

    var menit = Math.floor(seconds / 60)
    var detik = seconds % 60

    if (menit < 10) {

      if (detik < 10) {
        displayCountdown(`0${menit}:0${detik}`)
      } else {
        displayCountdown(`0${menit}:${detik}`)
      }

    } else {
      if (detik < 10) {
        displayCountdown(`${menit}:0${detik}`)
      } else {
        displayCountdown(`${menit}:${detik}`)
      }
    }


    // while (seconds >= 60) {
    //   minute += 1;
    //   seconds -= 60;
    // }
    //
    // if (seconds < 10) {
    //   displayCountdown('00:0'+ seconds)
    // } else if (seconds < 60) {
    //   displayCountdown('00:'+ seconds)
    // } else if (seconds > 60) {
    //   displayCountdown('0' + minute + ':'+ seconds);
    // }
    //
    seconds--
    // if (seconds == -1) {
    //   clearInterval(interval)
    // }
  }, 1000)
}

module.exports = {
  timer
};
