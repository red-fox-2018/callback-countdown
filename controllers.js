const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  var waktu = setInterval(function () {
    displayCountdown(seconds);
    seconds--
    if(seconds < 0) {
      clearInterval(waktu)
    }
  }, 1000);
}

module.exports = {
  timer
};
