// script.js

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
          ${londonTime}<br>
          ${istanbulTime}<br>
          ${tehranTime}<br>
          ${yerevanTime}<br>
          ${dubaiTime}
      `;
  }

  // Update clocks immediately and then every second
  updateClocks();
  setInterval(updateClocks, 1000);
});