// script.js

// JavaScript code to display "Hello, World!" inside the <p> element with id "1"
document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded
    var paragraph = document.createElement("p"); // Create a <p> element
    paragraph.textContent = "Hello, World!"; // Set the text content of the <p> element
    
    // Get the element with id "1"
    var targetElement = document.getElementById("1");
    
    if (targetElement) {
        // If the element with id "1" exists, append the <p> element to it
        targetElement.appendChild(paragraph);
    } else {
        // If the element with id "1" doesn't exist, log an error to the console
        console.error("Element with id '1' not found.");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    function updateAge() {
      const birthday = new Date('1998-02-14T00:00:00Z'); // Your birthday in ISO format
      const now = new Date();
      const ageInMilliseconds = now - birthday;
      const ageInSeconds = ageInMilliseconds / 1000;
  
      document.getElementById('Years').innerText = ageInSeconds.toFixed(2); // Display age in seconds with three decimals for milliseconds
      document.getElementById('Seconds').innerText = ageInSeconds.toFixed(2); // Display age in seconds with three decimals for milliseconds
      
    }
  
    setInterval(updateAge, 1); // Update the age every millisecond
    updateAge(); // Run function immediately to avoid delay
  });
  

  

    
  
