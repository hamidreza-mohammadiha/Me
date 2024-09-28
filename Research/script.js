// script.js

document.addEventListener('DOMContentLoaded', function() {
    function updateAge() {
      const birthday = new Date('1998-02-14T00:00:00Z'); // Your birthday in ISO format
      const now = new Date();
      const ageInMilliseconds = now - birthday;
      const ageInSeconds = ageInMilliseconds / 1000;
      const ageInYears = ageInSeconds / (60*60*24*365.25)
  
      document.getElementById('Years').innerText = ageInYears.toFixed(10); // Display age in Years
      // document.getElementById('Seconds').innerText = ageInSeconds.toFixed(2); // Display age in seconds with three decimals for milliseconds
      
    }
  
    setInterval(updateAge, 1); // Update the age every millisecond
    updateAge(); // Run function immediately to avoid delay
  });