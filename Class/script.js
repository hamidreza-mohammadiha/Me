document.addEventListener('DOMContentLoaded', function() {
    function updateDateTime() {
        const now = new Date();
        const dateElement = document.createElement('span');
        const timeElement = document.createElement('span');
        const separator = document.createElement('span');
        
        // Format date (e.g., "Mon Aug 19 2024")
        const dateString = now.toDateString();
        // Format time as HH:MM:SS
        const timeString = now.toLocaleTimeString();
        
        // Set date text and style (white)
        dateElement.textContent = dateString;
        dateElement.style.color = 'white';
        
        // Add a separator (you can customize this)
        separator.textContent = ' - ';
        separator.style.color = 'white';
        
        // Set time text and style (teal)
        timeElement.textContent = timeString;
        timeElement.style.color = 'rgb(4, 215, 234)';
        
        // Clear and update the container
        const container = document.getElementById('time');
        container.innerHTML = '';
        container.appendChild(dateElement);
        container.appendChild(separator);
        container.appendChild(timeElement);
    }

    // Update immediately and then every second
    updateDateTime();
    setInterval(updateDateTime, 1000);
});