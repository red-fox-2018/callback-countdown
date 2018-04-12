const { timer } = require("./controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 10;

  let detik = seconds % 60 + 1
  let menit = Math.floor(seconds / 60)
  let interval = setInterval(() => {

    if (menit > 0 && detik == 0) {
      menit -= 1
      detik = 60
    }

    if (detik == 0 && menit == 0) {

      clearInterval(interval)

    } else {

      detik--

      if (detik < 10) {
        if (menit < 10) {
          timer(`0${menit}:0${detik}`)
        } else {
          timer(`${menit}:0${detik}`)
        }
      } else {
        if (menit < 10) {
          timer(`0${menit}:${detik}`)
        } else {
          timer(`${menit}:${detik}`)
        }
      }

    }

  }, 800);


};

main();
