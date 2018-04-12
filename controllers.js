const { displayCountdown } = require("./views");

const timer = seconds => {

    let clear = setInterval(function(){
        displayCountdown(seconds)
        seconds--
        if (seconds < 0) {
            clearInterval(clear);
        }
    }, 1000)

};

module.exports = {
  timer
};
