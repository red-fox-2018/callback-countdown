const { displayCountdown } = require("./views");

const timer = seconds => {
  let interval = setInterval(function () {
    if (seconds >= 0 ) {
      let min = Math.floor(seconds/60);
      let sec = seconds % 60
      if (String(sec).length === 1) {
        sec = '0' + sec.toString()
      }
      let strTime = min + ' : ' + sec

      displayCountdown(strTime)
    } else {
      clearInterval(interval)
    }
    seconds--
  }, 1000);
};

module.exports = {
  timer
};
