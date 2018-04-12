const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  var countdown = setInterval(function() {
    seconds-=1
    displayCountdown(seconds)
    if(seconds === 0) {
      clearInterval(countdown)
    }
  }, 1000)

};

module.exports = {
  timer
};
