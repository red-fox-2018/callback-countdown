const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let interval = setInterval(setTime, 1000)
  function setTime(){
    displayCountdown(seconds);
      seconds -= 1;

    if(seconds < 0){
      clearInterval(interval)
    }
  }

};

module.exports = {
  timer
};
