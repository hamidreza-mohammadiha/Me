const numberElement = document.getElementById('number');
let currentNumber = 3.5;
const maxRotation = 10; // degrees
const animationDuration = 3.5; // seconds for half cycle

function updateNumber(isIncreasing) {
  const step = isIncreasing ? 0.1 : -0.1;
  currentNumber += step;

  if (currentNumber <= 1 || currentNumber >= 6) {
    clearInterval(intervalId);
    setTimeout(() => {
      intervalId = setInterval(() => updateNumber(!isIncreasing), animationDuration * 1000 / (maxRotation * 2));
    }, animationDuration * 1000);
  }

  numberElement.textContent = currentNumber.toFixed(1);
}

let intervalId = setInterval(() => updateNumber(true), animationDuration * 1000 / (maxRotation * 2));

