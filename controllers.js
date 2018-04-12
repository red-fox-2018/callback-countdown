const { displayCountdown } = require("./views");

const timer = seconds => {
 
  // Your code here...
  var countdown = setInterval(function() {
    seconds=seconds-1
    var mins=Math.floor(seconds/60)>1? "0"+Math.floor(seconds/60):"00"
    var sec= seconds%60==0?mins="01":seconds%60

    if(sec>0){
      sec-1
    }
    else{
      if(mins>=1){
        mins=mins-1
        sec-1
      }
    }

    console.log(mins+" : " +sec)

    if (seconds <= 0) {
        clearInterval(countdown);
    }

}, 1000);
};



module.exports = {
  timer
};
