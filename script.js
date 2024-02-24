// script.js

document.addEventListener('DOMContentLoaded', function() {
    function updateAge() {
      const birthday = new Date('1998-02-14T00:00:00Z'); // Your birthday in ISO format
      const now = new Date();
      const ageInMilliseconds = now - birthday;
      const ageInSeconds = ageInMilliseconds / 1000;
      const ageInYears = ageInSeconds / (60*60*24*365.25)
  
      document.getElementById('Years').innerText = ageInYears.toFixed(9); // Display age in Years
      document.getElementById('Seconds').innerText = ageInSeconds.toFixed(2); // Display age in seconds with three decimals for milliseconds
      
    }
  
setInterval(updateAge, 1); // Update the age every millisecond
updateAge(); // Run function immediately to avoid delay
  });

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
  
  

  

    
  
