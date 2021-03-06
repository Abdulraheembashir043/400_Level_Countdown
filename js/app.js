const days = document.getElementById('day');
const hours = document.getElementById('hour');
const minutes = document.getElementById('minute');
const seconds = document.getElementById('second');


const cDown = new Date('May 24, 2021');

function countDown() {
  const now = new Date();
  const diff = cDown - now;

  let d, h, m, s;

  d = diff < 0 ? 0 : Math.floor(diff / 1000 / 60 / 60 / 24);
  h = diff < 0 ? 0 : Math.floor(diff / 1000 / 60 / 60) % 24;
  m = diff < 0 ? 0 : Math.floor(diff / 1000 / 60) % 60;
  s = diff < 0 ? 0 : Math.floor(diff / 1000) % 60;

  days.textContent = (d < 10) ? '0' + d : d;
  hours.textContent = (h < 10) ? '0' + h : h;
  minutes.textContent = (m < 10) ? '0' + m : m;
  seconds.textContent = (s < 10) ? '0' + s : s;
}

setInterval(countDown, 1000);