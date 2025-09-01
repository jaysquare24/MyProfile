document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      toggleButton.classList.toggle('toggle-moved');
      const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    });
  }
});



/*-------- MENU TOGGLE-----------------*/

/* DOM Elements*/
const body = document.querySelector('.body');
const menuIcon = document.getElementById('menu-icon');
const menuButton = document.getElementById('menu-button');
const nav = document.getElementById('hidden');


/* Event Handler */
function toggleMenu() {
  // Toggle navigation visibility
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
  
  // Toggle menu icon
  menuIcon.src.endsWith("icons8-menu-24.png")? 
  menuIcon.src = "resources/icons8-cancel-24.png":
  menuIcon.src = "resources/icons8-menu-24.png";

  // Toggle scroll lock on body
  document.body.classList.toggle('menu-open', nav.style.display === 'block');
     

  

}

/* Event Listeners*/
menuButton.addEventListener('click', toggleMenu);



/*-------- PROJECTS SECTION FILTER -----------------*/

/* DOM Elements*/
  const allBtn = document.querySelector(".all-button");
  const appBtn = document.querySelector(".app-button");
  const siteBtn = document.querySelector(".site-button");
  const projectsBtn = document.querySelectorAll(".projects-button");
  const projectItems = document.querySelectorAll(".project-item");

/* Event Handler */
function filterProjects(type) {
  [allBtn, appBtn, siteBtn].forEach(btn => btn.classList.remove("active"));

  projectItems.forEach(item => {
    if (type === "all") {
      item.style.display = "block";
      allBtn.classList.add("active");  
    } 
    else if (item.classList.contains(type)) {
      item.style.display = "block";
     if (type === "app")appBtn.classList.add("active");
     if (type === "site")siteBtn.classList.add("active");
    } else {
      item.style.display = "none";
    }
  });
}

/* Events Listeners*/
allBtn.addEventListener("click", () => filterProjects("all"));
appBtn.addEventListener("click", () => filterProjects("app"));
siteBtn.addEventListener("click", () => filterProjects("site"));





/*----------- SKILL IMAGES SLIDER-----------*/

/* DOM Element */
const slides = document.querySelector('.slider');

/* Image src Array*/
const imgSrc =[
  "./resources/icons8-css3.svg",
  "./resources/icons8-javascript.svg",
  "./resources/icons8-java.svg",
  "./resources/icons8-react.svg",
  "./resources/redux_original_logo_icon_146365.webp",
  "./resources/icons8-git.svg",
  "./resources/responsive-icon-4.png",
  "./resources/icons8-html5.svg"
  
                               
]

/* Slider Function */
function  slider() {
  let i = 0;
  setInterval(() => {
    if (i >= imgSrc.length) {
      i = 0;
    }
    slides.src = imgSrc[i];
    i++;
  }, 3000);
}
slider();


/*----------- ACTIVE NAV INDICATION ------------*/

document.querySelectorAll('.other-nav a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.other-nav a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});



/*........ TOGGLE MENU NAV........ */

const toggleNavMenu = document.querySelectorAll('.other-nav a');

if (window.innerWidth <= 768) {
  toggleNavMenu.forEach(link => {
  link.addEventListener('click', toggleMenu);
});
}



