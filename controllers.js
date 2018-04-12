const { displayCountdown } = require("./views");
const clear = require('clear');
const figlet = require('figlet');

const timer = seconds => {
  let intervalId = setInterval(function() {
    if (seconds >= 0) {
      displayCountdown(seconds);
    } else {
      clearInterval(intervalId);
    }
    seconds--;
  }, 1000);
};

module.exports = {
  timer
};