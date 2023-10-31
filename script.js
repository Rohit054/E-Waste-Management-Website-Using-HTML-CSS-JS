// JavaScript code

// Add active class to the clicked navigation link
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    // Remove active class from all navigation links
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });

    // Add active class to the clicked navigation link
    link.classList.add("active");
  });
});

// Scroll to sections when clicking on the navigation links
const scrollToSection = (event) => {
  event.preventDefault();

  const target = event.target.getAttribute("href");
  const section = document.querySelector(target);

  window.scrollTo({
    top: section.offsetTop,
    behavior: "smooth"
  });
};

navLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

// Handle form submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Simulate form submission success with a popup
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.textContent =
    "Form submitted successfully! We will get back to you soon.";

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 3000);

  // Reset the form fields
  contactForm.reset();
});

function popup() {
  document.getElementById("popup").style.cssText = "visibility:visible";
  document.getElementById("contact-form").style.cssText = "visibility:hidden";
}
function cln() {
  document.getElementById("popup").style.cssText = "visibility:hidden";
  document.getElementById("contact-form").style.cssText = "visibility:visible";
}
function n1() {
  document.getElementById("nav1").style.cssText =
    "background-color: #02356cc1;color: white;padding: 10px 20px;border-radius: 10px;font-weight: bold;";
}
function n2() {
  document.getElementById("nav2").style.cssText =
    "background-color: #02356cc1;color: white;padding: 10px 20px;border-radius: 10px;font-weight: bold;";
}
function n3() {
  document.getElementById("nav3").style.cssText =
    "background-color: #02356cc1;color: white;padding: 10px 20px;border-radius: 10px;font-weight: bold;";
}
function n4() {
  document.getElementById("nav4").style.cssText =
    "background-color: #02356cc1;color: white;padding: 10px 20px;border-radius: 10px;font-weight: bold;";
}
// function displayWelcomeMessage() {
//   var welcomeText = document.getElementById("welcome-text");
//   welcomeText.textContent = "Welcome to our website!";
// }
// document.getElementById("bdy").addEventListener("load",text-ani);
// function text-ani(){
//   document.getElementById("welcome-text").style.cssText = " overflow: hidden;border-right: 1px solid #000;white-space: nowrap;margin: 0 auto;letter-spacing: 4px;animation: typing 3s steps(40, end);";
// }
