function stopWatch() {
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
// stopWatch();

// Timer

function timer() {
  const btnStartTimer = document.querySelector(".start");
  const btnPauseTimer = document.querySelector(".pause");
  const btnResetTimer = document.querySelector(".reset");
  const secondsTimer = document.getElementById("seconds");
  const minutesTimer = document.getElementById("minutes");
  const hoursTimer = document.getElementById("hours");
  const inative = "inative";

  btnStartTimer.addEventListener("click", startTimer);
  btnPauseTimer.addEventListener("click", pauseTimer);
  btnResetTimer.addEventListener("click", resetTimer);

  let time;

  function formatTime() {
    let formatHour =
      hoursTimer.value.length === 1 ? "0" + hoursTimer.value : hoursTimer.value;
    let formatMinute =
      minutesTimer.value.length === 1
        ? "0" + minutesTimer.value
        : minutesTimer.value;
    let formatSecond =
      secondsTimer.value.length === 1
        ? "0" + secondsTimer.value
        : secondsTimer.value;

    hoursTimer.value = formatHour;
    minutesTimer.value = formatMinute;
    secondsTimer.value = formatSecond;
  }

  function startTimer() {
    if (
      secondsTimer.value != 0 ||
      minutesTimer.value != 0 ||
      hoursTimer.value != 0
    ) {
      time = setInterval(() => {
        let seconds = secondsTimer.value;
        let minutes = minutesTimer.value;

        --secondsTimer.value;
        if (seconds == 0) {
          secondsTimer.value = 59;
          --minutesTimer.value;
        }
        if (minutes == 0) {
          minutesTimer.value = 59;
          --hoursTimer.value;
        }
        formatTime();
      }, 10);
      btnStartTimer.setAttribute("disabled", "");
      btnStartTimer.classList.toggle(inative);
      btnPauseTimer.classList.toggle(inative);
      btnResetTimer.classList.remove(inative);
    }
  }

  function pauseTimer() {
    clearInterval(time);
    btnStartTimer.removeAttribute("disabled");
    btnStartTimer.classList.toggle(inative);
    btnPauseTimer.classList.toggle(inative);
  }

  function resetTimer() {
    secondsTimer.value = 0;
    minutesTimer.value = 0;
    hoursTimer.value = 0;
    btnResetTimer.classList.add(inative);
  }
}
timer();
