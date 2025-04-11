document.getElementById("hirebtn").addEventListener("click",function(event){
  window.location = "new.html";
});

document.addEventListener('DOMContentLoaded', (event) => {
      const toggleButton = document.getElementById('toggle-button');

      // Check if dark mode preference is stored in localStorage
      if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
      }

      // Toggle dark mode on button click
      toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Save the user's preference in localStorage
        if (document.body.classList.contains('dark-mode')) {
          localStorage.setItem('dark-mode', 'enabled');
        } else {
          localStorage.setItem('dark-mode', 'disabled');
        }
      });
     });