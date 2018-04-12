const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  console.log(chalk.cyan(figlet.textSync(seconds)));	
};

module.exports = { displayCountdown };


// if(menit<=60) {
//     return ("0:"+menit);
//   }else if (menit%60<=10) {
//     return (Math.floor(menit/60)+":"+'0'+menit%60);
//   }
//   else {
//     return (Math.floor(menit/60)+":"+menit%60);
//   }
//}