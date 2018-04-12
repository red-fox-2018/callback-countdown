const { displayCountdown } = require("./views");

const timer = seconds => {
  var interval = setInterval(function () {
    var minute = 1;
    while (seconds >= 60) {
      minute += 1;
      seconds -= 60;
    }

    if (seconds < 10) {
      displayCountdown('00:0'+ seconds)
    } else if (seconds < 60) {
      displayCountdown('00:'+ seconds)
    } else if (seconds > 60) {
      displayCountdown('0' + minute + ':'+ seconds);
    }

    seconds--
    if (seconds == -1) {
      clearInterval(interval)
    }
  }, 1000)
}

module.exports = {
  timer
};
