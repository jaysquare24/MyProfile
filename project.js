/*PROJECT PAGE FILTER*/

document.addEventListener('DOMContentLoaded', function () {
  const projectSections = document.querySelectorAll('.project-section');
  const hash = window.location.hash.replace('#', '');

  if (hash) {
    projectSections.forEach(section => {
      if (section.id === hash) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    });
  }
});



