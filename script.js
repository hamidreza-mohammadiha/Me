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
