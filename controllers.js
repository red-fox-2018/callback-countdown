const { displayCountdown } = require("./views");
const clear = require('clear');
const figlet = require('figlet');

const timer = seconds => {
  let intervalId = setInterval(function() {
    if (seconds >= 0) {
      displayCountdown(konversiMenit(seconds));
    } else {
      clearInterval(intervalId);
    }
    seconds--;
  }, 1000);
};

const konversiMenit = (menit) => ((Math.floor(menit / 60) > 9 ? Math.floor(menit / 60) : `0${Math.floor(menit / 60)}` ) + ':' + ((menit % 60) < 10 ? ('0' + (menit % 60)) : (menit % 60)));


module.exports = {
  timer
};