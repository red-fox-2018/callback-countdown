const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  // Your code here...
  let minutes = Math.floor(seconds/60);
  let sec = seconds % 60;

  if (minutes.toString().length < 2) {
    minutes = `0${minutes}`;
  }

  if (sec.toString().length < 2) {
    sec = `0${sec}`;
  }

  let countdownTimer = `${minutes} : ${sec}`;
  
  console.log(chalk.blue(figlet.textSync("Countdown App")));
  console.log(chalk.red(figlet.textSync(countdownTimer)));  
};

module.exports = { displayCountdown };
