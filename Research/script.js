// script.js

document.addEventListener('DOMContentLoaded', function() {
    function updateAge() {
      const now = new Date();
      document.getElementById('time').innerText = now;
      // document.getElementById('Seconds').innerText = ageInSeconds.toFixed(2); // Display age in seconds with three decimals for milliseconds
    }
  
    setInterval(updateAge, 1000); // Update the age every millisecond
    updateAge(); // Run function immediately to avoid delay
  });