function timer() {
  const btnStartTimer = document.querySelector(".start");
  const btnPauseTimer = document.querySelector(".pause");
  const btnResetTimer = document.querySelector(".reset");
  const btnNotification = document.querySelector(".btn-notification");
  const secondsTimer = document.getElementById("seconds");
  const minutesTimer = document.getElementById("minutes");
  const hoursTimer = document.getElementById("hours");
  const inative = "inative";

  btnStartTimer.addEventListener("click", startTimer);
  btnPauseTimer.addEventListener("click", pauseTimer);
  btnResetTimer.addEventListener("click", resetTimer);
  btnNotification.addEventListener("click", permission);

  let time;

  function timeAdjustment() {
    if (secondsTimer.value > 60) {
      const newMinutes = Math.floor(secondsTimer.value / 60);
      const secondsRest = Math.floor(secondsTimer.value % 60);
      secondsTimer.value = secondsRest;
      minutesTimer.value = minutesTimer.value + newMinutes;
      console.log(newMinutes, secondsRest);
    }
    if (minutesTimer.value > 60) {
      const newHours = Math.floor(minutesTimer.value / 60);
      const minutesRest = Math.floor(minutesTimer.value % 60);
      console.log(newHours, minutesRest);
      minutesTimer.value = minutesRest;
      hoursTimer.value = hoursTimer.value + newHours;
    }
  }

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

  function permission() {
    if (Notification.permission !== "denied") {
      Notification.requestPermission();
    }
  }

  function notifyMe() {
    if (!("Notification" in window)) {
      alert("Este browser não suporta notificações de Desktop");
    } else if (Notification.permission === "granted") {
      const notification = new Notification("Acabou o tempo.");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission();
    }
  }

  function alarm() {
    const audio = new Audio("./sounds/alarm.mp3");
    audio.play();
  }

  function startTimer() {
    if (
      secondsTimer.value != 0 ||
      minutesTimer.value != 0 ||
      hoursTimer.value != 0
    ) {
      timeAdjustment();
      time = setInterval(() => {
        let seconds = secondsTimer.value;
        let minutes = minutesTimer.value;
        let hours = hoursTimer.value;

        if (hours == 0 && minutes == 0 && seconds == 0) {
          pauseTimer();
          notifyMe();
          alarm();
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
      }, 1000);
      btnStartTimer.setAttribute("disabled", "");
      btnStartTimer.classList.add(inative);
      btnPauseTimer.classList.remove(inative);
      btnResetTimer.classList.remove(inative);
    }
  }

  function pauseTimer() {
    clearInterval(time);
    btnStartTimer.removeAttribute("disabled");
    btnStartTimer.classList.remove(inative);
    btnPauseTimer.classList.add(inative);
  }

  function resetTimer() {
    secondsTimer.value = "";
    minutesTimer.value = "";
    hoursTimer.value = "";
    btnResetTimer.classList.add(inative);
  }
}
timer();
