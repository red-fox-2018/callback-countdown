const { timer } = require("./controllers");


const main = () => {
  const seconds = parseInt(process.argv[2] || 5);
  timer(seconds);//interval
};

main();
