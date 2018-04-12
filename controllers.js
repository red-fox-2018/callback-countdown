const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  var myVar = setInterval(function(){ 
    displayCountdown(seconds) 
    
    seconds--
    if(seconds < 0) {

      clearInterval(myVar)
    }
  }, 1000);
};

module.exports = {
  timer
};
