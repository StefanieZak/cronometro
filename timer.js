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
        let hours = hoursTimer.value;

        if (hours == 0 && minutes == 0 && seconds == 0) {
          pauseTimer();
        }
        if (seconds != 0) {
          --secondsTimer.value;
        }
        if (minutes != 0 && seconds == 0) {
          secondsTimer.value = 59;
          --minutesTimer.value;
        }
        if (hours != 0 && minutes == 0) {
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
    secondsTimer.value = "";
    minutesTimer.value = "";
    hoursTimer.value = "";
    btnResetTimer.classList.add(inative);
  }
}
timer();
