let timer = 0;
let interval = null;
let isRunning = false;

const timeDisplay = document.getElementById("time");
const startPauseButton = document.getElementById("startPause");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const lapsContainer = document.getElementById("laps");

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = ms % 1000;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}:${String(milliseconds).padStart(3, "0")}`;
}

function updateTime() {
  timer += 10;
  timeDisplay.textContent = formatTime(timer);
}

startPauseButton.addEventListener("click", () => {
  if (isRunning) {
    clearInterval(interval);
    startPauseButton.textContent = "Start";
  } else {
    interval = setInterval(updateTime, 10);
    startPauseButton.textContent = "Pause";
  }
  isRunning = !isRunning;
});

resetButton.addEventListener("click", () => {
  clearInterval(interval);
  timer = 0;
  timeDisplay.textContent = formatTime(timer);
  startPauseButton.textContent = "Start";
  isRunning = false;
  lapsContainer.innerHTML = "";
});

lapButton.addEventListener("click", () => {
  if (isRunning) {
    const lapItem = document.createElement("li");
    lapItem.textContent = formatTime(timer);
    lapsContainer.appendChild(lapItem);
  }
});
