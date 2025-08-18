document.addEventListener('DOMContentLoaded', function() {
    function updateAge() {
      const now = new Date();
      document.getElementById('time').innerText = now;
    }
  
    setInterval(updateAge, 1000); // Update the age every millisecond
  });