'use strict';
// const newYear = '21 Jan 2024';

// const daysElement = document.getElementById('days');
// const hoursElement = document.getElementById('hours');
// const minutesElement = document.getElementById('minutes');
// const secondsElement = document.getElementById('seconds');

// function countdown() {
//   const newYearsDate = new Date(newYear);
//   const currentDate = new Date();

//   const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000);

//   const days = Math.floor(totalSeconds / 3600 / 24);
//   const hours = Math.floor(totalSeconds / 3600) % 24;
//   const minutes = Math.floor(totalSeconds / 60) % 60;
//   const seconds = Math.floor(totalSeconds) % 60;
//   console.log(totalSeconds, days, hours, minutes, seconds);

//   daysElement.innerHTML = days;
//   hoursElement.innerHTML = formatTime(hours);
//   minutesElement.innerHTML = formatTime(minutes);
//   secondsElement.innerHTML = formatTime(seconds);
//   setInterval(countdown, 1000);
// }

// function formatTime(time) {
//   return time < 10 ? `0${time}` : time;
// }
// countdown();

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

let countdownInterval;

function countdownStart() {
  const inputDataValue = document.getElementById('inputDate').value;
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
    const totalSeconds = Math.floor((selectedDate - currentDate) / 1000);

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

function updateDisplay(days, hours, minutes, seconds) {
  daysElement.innerHTML = days;
  hoursElement.innerHTML = formatTime(hours);
  minutesElement.innerHTML = formatTime(minutes);
  secondsElement.innerHTML = formatTime(seconds);
}

function resetDisplay() {
  updateDisplay(0, 0, 0, 0);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
