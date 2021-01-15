function stopwatch() {
  const start = document.querySelector(".start");
  const pause = document.querySelector(".pause");
  const reset = document.querySelector(".reset");
  const seconds = document.querySelector(".seconds");
  const minutes = document.querySelector(".minutes");
  const hours = document.querySelector(".hours");

  const inative = "inative";

  start.addEventListener("click", startTime);
  pause.addEventListener("click", pauseTime);
  reset.addEventListener("click", resetTime);

  let second = 0;
  let minute = 0;
  let hour = 0;
  let timer;

  function formatTime() {
    let formatHour = hour < 10 ? "0" + hour : hour;
    let formatMinute = minute < 10 ? "0" + minute : minute;
    let formatSecond = second < 10 ? "0" + second : second;

    hours.innerText = formatHour;
    minutes.innerText = formatMinute;
    seconds.innerText = formatSecond;
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
      formatTime();
    }, 1000);
    start.setAttribute("disabled", "");
    start.classList.toggle(inative);
    pause.classList.toggle(inative);
    reset.classList.remove(inative);
  }

  function pauseTime() {
    clearInterval(timer);
    start.removeAttribute("disabled");
    start.classList.toggle(inative);
    pause.classList.toggle(inative);
  }

  function resetTime() {
    seconds.innerText = "0" + 0;
    second = 0;
    minutes.innerText = "0" + 0;
    minute = 0;
    hours.innerText = "0" + 0;
    hour = 0;
    reset.classList.add(inative);
  }
}
stopwatch();
