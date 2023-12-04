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

    // dropping-letter-animation.js

document.addEventListener("DOMContentLoaded", function () {
    // Function to create dropping-letter animation
    function droppingLetterAnimation(text, elementId) {
      const element = document.getElementById(elementId);
      element.innerHTML = ""; // Clear existing content
  
      for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
          element.innerHTML += `<span style="position: relative; top: ${i * 20}px;">${text[i]}</span>`;
        }, i * 100); // Adjust the delay as needed
      }
  
      // Repeat the animation after a delay
      setTimeout(() => {
        droppingLetterAnimation(text, elementId);
      }, text.length * 100);
    }
  
    // Start the dropping-letter animation
    droppingLetterAnimation("This paragraph", "2");
  });
  
