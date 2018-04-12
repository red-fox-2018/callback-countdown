const { displayCountdown } = require("./views");

const timer = seconds => {

  var intervalID = setInterval(function() {
    displayCountdown(seconds)
    // console.log(seconds)
    seconds--
    if(seconds<0){
      clearInterval(intervalID)
    }
 }, 1000);
}


module.exports = {
  timer
};

// console.log(myTimer());
