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


document.querySelector('.copy-btn').addEventListener('click', () => {
  const textToCopy = document.getElementById('email-text').textContent;
  navigator.clipboard.writeText(textToCopy).then(() => {
      alert('Copied to clipboard!');
  }).catch(err => {
      console.error('Failed to copy text: ', err);
  });
});