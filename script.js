const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");

start.addEventListener("click", startTime);
pause.addEventListener("click", pauseTime);
reset.addEventListener("click", resetTime);

let second = 0;
let minute = 0;
let hour = 0;
let timer;

function valueTime() {
  if (second < 10) {
    seconds.innerText = "0" + second;
  }
  if (minute < 10) {
    minutes.innerText = "0" + minute;
  }
  if (hour < 10) {
    hours.innerText = "0" + hour;
  }
}

function startTime() {
  timer = setInterval(() => {
    seconds.innerText = second++;
    if (second > 59) {
      seconds.innerText = 0;
      second = 0;
      minutes.innerText = ++minute;
    }
    if (minute > 59) {
      minutes.innetText = 0;
      minute = 0;
      hours.innerText = ++hour;
    }
    valueTime();
  }, 1000);
  start.setAttribute("disabled", "");
}

function pauseTime() {
  clearInterval(timer);
  start.removeAttribute("disabled");
}

function resetTime() {
  seconds.innerText = "0" + 0;
  second = 0;
}
