/*-------- MENU TOGGLE-----------------*/

/* DOM Elements*/
const body = document.querySelector('.body');
const menuIcon = document.getElementById('menu-icon');
const menuButton = document.getElementById('menu-button');
const nav = document.getElementById('hidden');


/* Event Handler */
function toggleMenu() {
  
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';

  if (menuIcon.src.endsWith("icons8-menu-24.png")) {
      menuIcon.src = "resources/icons8-cancel-24.png";
      
  } else {
      menuIcon.src = "resources/icons8-menu-24.png";
     
  }
  

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
  "./resources/icons8-redux-100.png",
  "./resources/icons8-git.svg",
  "./resources/icons8-responsive-design-100.png",
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



