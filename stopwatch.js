window.onload = function () {
  let milliSecs = 00;
  let seconds = 00;
  let minutes = 00;
  let attachmilliSecs = document.getElementById("milliSecs");
  let attachSeconds = document.getElementById("seconds");
  let attachMinutes = document.querySelector(".minutes");
  let buttonStart = document.getElementById("button-start");
  let buttonStop = document.getElementById("button-stop");
  let buttonReset = document.getElementById("button-reset");
  let Interval;

  buttonStart.addEventListener("click", function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  });

  buttonStop.addEventListener("click", function () {
    clearInterval(Interval);
  });

  buttonReset.addEventListener("click", function () {
    clearInterval(Interval);
    minutes = "00m";
    seconds = "00s";
    milliSecs = "00";
    attachMinutes.innerHTML = minutes;
    attachSeconds.innerHTML = seconds;
    attachmilliSecs.innerHTML = milliSecs;
  });

  function startTimer() {
    milliSecs++;

    if (milliSecs > 9) {
      attachmilliSecs.innerHTML = milliSecs;
    }

    if (milliSecs > 99) {
      console.log("seconds");
      seconds++;
      attachSeconds.innerHTML = `${seconds}s`;
      milliSecs = 0;
      attachmilliSecs.innerHTML = 0;
    }

    if (seconds >= 60) {
      console.log("minutes");
      minutes++;
      attachMinutes.innerHTML = `${minutes}m`;
      seconds = 0;
      attachSeconds.innerHTML = 0;
    }
  }

  // display current time on page
  function showTime() {
    let date = new Date();
    let hour = date.getHours(); // 0 - 23
    let minutes = date.getMinutes(); // 0 - 59
    let seconds = date.getSeconds(); // 0 - 59
    let timeStamp = "AM";

    if (hour == 0) {
      hour = 12;
    }

    if (hour > 12) {
      hour = hour - 12;
      timeStamp = "PM";
    }

    hour = hour < 10 ? hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = `${hour}:${minutes}:${seconds} ${timeStamp}`;
    document.getElementById("showClock").innerText = time;
    document.getElementById("showClock").textContent = time;

    setTimeout(showTime, 1000);
  }

  showTime();
};
