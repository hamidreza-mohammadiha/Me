function highlightLink() {
    const link = document.querySelector('a');

    link.addEventListener('mouseover', () => {
      link.style.color = 'red';
      link.style.transition = 'color 0.5s ease-in-out';
    });

    link.addEventListener('mouseout', () => {
      link.style.color = 'blue';
      link.style.transition = 'color 0.5s ease-in-out';
    });
  }

  // Call the function when the page loads
  window.addEventListener('DOMContentLoaded', highlightLink);