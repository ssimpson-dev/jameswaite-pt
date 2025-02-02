const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a'); 

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
    navLinks.classList.remove("active"); 
  });
});

const modal = document.getElementById("enquiryModal");
const openModalBtns = document.querySelectorAll(".openModalBtn"); 
const closeModalBtn = document.querySelector(".close-btn");


openModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});


closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


window.addEventListener("click", (event) => {
  if (event.target === modal) { 
    modal.style.opacity = "0";
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); 
  var form = this;
  var successMessage = document.getElementById("success-message");

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      successMessage.style.display = "block"; 
      form.reset(); 
      setTimeout(() => {
        modal.style.display = "none"; 
        successMessage.style.display = "none"; 
      }, 2000);
    } else {
      alert("There was an error. Please try again.");
    }
  }).catch(error => alert("There was an error. Please try again."));
});
