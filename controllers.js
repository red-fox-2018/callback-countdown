 const { displayCountdown } = require("./views");

const timer = seconds => {
  let interval = setInterval(function(){
  	if (seconds>=0 && seconds<=10) {
  		let min=Math.floor(seconds/60)
  		let sec=seconds%60
  		let setTimer = '0'+min+':'+'0'+sec
  		displayCountdown(setTimer)
  	}
  	else if (seconds>=0 && seconds>10) {
  		let min=Math.floor(seconds/60)
  		let sec=seconds%60
  		let setTimer = '0'+min+' : '+''+sec
  		displayCountdown(setTimer)
  	}
  	else if (seconds<0) {
  		clearInterval(interval)
  	}
  	seconds --
  }, 1000);
  
}


module.exports = {
  timer
};
