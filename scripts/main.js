var deadline = 'November 19 2016 19:00:00 GMT-0700';

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(endtime) {
  var days = document.getElementById('clock-days');
  var hours = document.getElementById('clock-hours');
  var minutes = document.getElementById('clock-minutes');
  var seconds = document.getElementById('clock-seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    days.innerHTML = t.days;
    hours.innerHTML = t.hours;
    minutes.innerHTML = t.minutes;
    seconds.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

initializeClock(deadline);
