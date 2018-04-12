const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  var menit = Math.floor(seconds/60) + ''
  var detik = seconds % 60 + ''

  if(menit.length < 2) {
    var minute = `0${menit}`
  }

  if(detik.length < 2) {
    var second = `0${detik}`
  }

  var countdown = `${minute}:${second}`
  console.log(figlet.textSync(countdown));
};

module.exports = { displayCountdown };
