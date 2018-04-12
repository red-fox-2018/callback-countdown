const { displayCountdown } = require("./views");

const timer = seconds => {
  let number = 10;
  let interval = setInterval(function(){ 
    if(number !== 0){
      let min = Math.floor(number/60)
      let sec = number%60
      if(min < 10 && sec <10){
        displayCountdown(`0${min}:0${sec}`)
      }
      else if(min < 10 && sec > 10){
        displayCountdown(`0${min}:${sec}`)
      }
      else if(min > 10 && sec > 10){
        displayCountdown(`${min}:${sec}`)
      }
      
      number--
    }
    else{
      displayCountdown(`0${number}:0${number}`)
      clearInterval(interval)
    }
   }, 1000);
   
};

module.exports = {
  timer
};
