const time1 = function (time) {

  if (!time) {
    return "Please, schedule your timer";
  };

  for (let num of time) {
    if (typeof (num) === 'number' && num > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
        console.log("Beep");
      }, num * 1000);
    }
  }
}

time1([10, 3, 5, 15, 9]);

