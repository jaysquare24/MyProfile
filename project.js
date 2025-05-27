/*PROJECT PAGE FILTER*/

document.addEventListener('DOMContentLoaded', function() {
    const projectSections = document.querySelectorAll('.project-section');
    // Get the hash from the URL (e.g., #expense-tracker)
    const hash = window.location.hash.replace('#', '');

    if (hash) {
    projectSections.forEach(section => {
    section.style.display = section.id === hash? 'block' : 'none';
        
    });
    } else {
    // If no hash, show all or just the first section
    projectSections.forEach((section, i) => {
        section.style.display = i === 0 ? 'block' : 'none';
    });
    }
});