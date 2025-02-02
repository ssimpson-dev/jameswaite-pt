const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function () {
  navLinks.classList.toggle('active');
  
});

document.addEventListener('click', (event) => {
  if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
    navLinks.classList.remove('active');
  }
});

links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active"); // Close the menu
  });
});