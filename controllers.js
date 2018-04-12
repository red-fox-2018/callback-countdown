const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...

 var setInter= 
 setInterval(function() {
 	seconds--
 	if(seconds>=0){
 		if(seconds>=60 && seconds<600)
 			displayCountdown(`0${Math.floor(seconds/60)} : ${seconds % 60}`)
 		}else if(secoonds>=600){
 			displayCountdown(`${Math.floor(seconds/60)} : ${seconds % 60}`)
 		}else if(seconds<60) {
 			displayCountdown(`00 : ${seconds}`)
 	}else {
 		clearInterval(setInter)
 	}
 },1000);
 
 

}


module.exports = {
  timer
};
