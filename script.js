function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer'],
    typeSpeed: 100,      // typing speed in ms per character
    backSpeed: 60,      // deleting speed
    backDelay: 1500,    // pause before deleting
    loop: true          // infinite loop
});