/*PROJECT PAGE FILTER*/

document.addEventListener('DOMContentLoaded', function () {
  const projectSections = document.querySelectorAll('.project-section');
  const hash = window.location.hash.replace('#', '');

  if (hash) {
    projectSections.forEach(section => {
      section.style.display = section.id === hash ? 'block' : 'none';
    });
  }
});





