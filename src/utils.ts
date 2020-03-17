function date () {
  let date = new Date();

  let day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
  let year = date.getFullYear();

  return {
    day: day,
    month: month,
    year: year
  }
}

function clock () {
  let date = new Date();

  let hour = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
  let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
  let seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`;
  let ms = date.getMilliseconds();
  let msstring = "";

  if (ms > 9) {
    if (ms > 99) {
      msstring = `${ms}`
    } else {
      msstring = "0" + ms;
    }
  } else {
    msstring = "00" + ms;
  }

  return {
    hours: hour,
    minutes: minutes,
    seconds: seconds,
    ms: msstring
  }
}

function timestamp () {
  let time = clock();
  let today = date();
  return `${today.day}.${today.month}.${date().year} ${time.hours}:${time.minutes}:${time.seconds}:${time.ms}`
}

const times = {
  date: date,
  clock: clock,
  timestamp: timestamp
};

export {
  times
};