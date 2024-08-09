const daysElement = document.getElementById('days') as HTMLElement;
const hoursElement = document.getElementById('hours') as HTMLElement;
const minutesElement = document.getElementById('minutes') as HTMLElement;
const secondsElement = document.getElementById('seconds') as HTMLElement;

let countdownInterval: ReturnType<typeof setInterval>;

function countdownStart(): void {
  const inputDataValue = (
    document.getElementById('inputDate') as HTMLInputElement
  ).value;
  if (!inputDataValue) {
    console.error('Input correct date');
    return;
  }

  const selectedDate = new Date(inputDataValue);

  if (isNaN(selectedDate.getTime())) {
    console.error('Input correct date');
    return;
  }

  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const currentDate = new Date();
    const totalSeconds = Math.floor(
      (selectedDate.getTime() - currentDate.getTime()) / 1000
    );

    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      resetDisplay();
      return;
    }

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    updateDisplay(days, hours, minutes, seconds);
  }, 1000);
}

function updateDisplay(
  days: number,
  hours: number,
  minutes: number,
  seconds: number
): void {
  daysElement.innerHTML = days.toString();
  hoursElement.innerHTML = formatTime(hours);
  minutesElement.innerHTML = formatTime(minutes);
  secondsElement.innerHTML = formatTime(seconds);
}

function resetDisplay(): void {
  updateDisplay(0, 0, 0, 0);
}

function formatTime(time: number): string {
  return time < 10 ? `0${time}` : time.toString();
}
