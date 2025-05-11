/* DOM ELEMENT*/
const menuIcon = document.getElementById('menu-icon');
const menuButton = document.getElementById('menu-button')
const nav = document.getElementById('hidden');
/* EVENT HANDLER */
function toggleMenu() {
  
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';

  if (menuIcon.src.endsWith("icons8-menu-24.png")) {
      menuIcon.src = "resources/icons8-cancel-24.png";
  } else {
      menuIcon.src = "resources/icons8-menu-24.png";
  }
}

/* EVENT LISTENER*/
menuButton.addEventListener('click', toggleMenu);


document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.querySelector('.resume-file');

    iframe.addEventListener('touchstart', () => {
        iframe.style.pointerEvents = 'auto'; // Enable interaction
    });

    document.body.addEventListener('touchstart', (event) => {
        if (!iframe.contains(event.target)) {
            iframe.style.pointerEvents = 'none'; // Disable interaction when clicking outside
        }
    });
});