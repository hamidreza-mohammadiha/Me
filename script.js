// script.js

document.addEventListener('DOMContentLoaded', function() {
    function updateAge() {
      const birthday = new Date('1998-02-14T00:00:00Z'); // Your birthday in ISO format
      const now = new Date();
      const ageInMilliseconds = now - birthday;
      const ageInSeconds = ageInMilliseconds / 1000;
      const ageInYears = ageInSeconds / (60*60*24*365.25)
  
      document.getElementById('Years').innerText = ageInYears.toFixed(10); // Display age in Years
      // document.getElementById('time').innerText = now;
      // document.getElementById('Seconds').innerText = ageInSeconds.toFixed(2); // Display age in seconds with three decimals for milliseconds
      
    }
  
    setInterval(updateAge, 1); // Update the age every millisecond
    updateAge(); // Run function immediately to avoid delay
  });

  document.addEventListener('DOMContentLoaded', function() {
    function updateClocks() {
        const now = new Date();
        
        // Helper function to format time with color
        function formatTime(date, timeZone, city) {
            const options = {
                timeZone: timeZone,
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false // 24-hour format (change to `true` for AM/PM)
            };
            const formatted = date.toLocaleString('en-US', options);
            
            // Extract time (HH:MM:SS) and wrap it in a colored span
            const timePart = formatted.match(/\d{2}:\d{2}:\d{2}/)[0];
            const coloredTime = `<span style="color: #3498db;">${timePart}</span>`;
            
            // Replace the time part with the colored version
            return formatted.replace(timePart, coloredTime) + ` (${city})`;
        }
        
        // Get formatted & colored times for each city
        const tehranTime = formatTime(now, 'Asia/Tehran', 'Tehran');
        const bostonTime = formatTime(now, 'America/New_York', 'Boston');
        const londonTime = formatTime(now, 'Europe/London', 'London');
        const yerevanTime = formatTime(now, 'Asia/Yerevan', 'Yerevan');
        const dubaiTime = formatTime(now, 'Asia/Dubai', 'Dubai');
        const istanbulTime = formatTime(now, 'Europe/Istanbul', 'Istanbul');
        
        
        // Display all times
        document.getElementById('time').innerHTML = `
            ${tehranTime}<br>
           
        `;
    }
  
    // Update clocks immediately and then every second
    updateClocks();
    setInterval(updateClocks, 1000);
  });