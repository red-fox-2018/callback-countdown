const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");
const app = require("./app.js")

const displayCountdown = seconds => {
  clear();
  
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here... 
};

module.exports = { displayCountdown };
