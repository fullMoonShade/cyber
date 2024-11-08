const roles = ["Cybersecurity Enthusiast", "DevOps Engineer", "Programmer"]; // Modify your roles here
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100;     // Speed of typing in milliseconds
const erasingSpeed = 50;     // Speed of erasing in milliseconds
const delayBetweenRoles = 2000; // Delay between roles after typing completes

const roleElement = document.getElementById("animated-roles");

function typeRole() {
  const currentRole = roles[roleIndex];
  
  if (!isDeleting && charIndex <= currentRole.length) {
    // Type characters
    roleElement.textContent = currentRole.slice(0, charIndex++);
    setTimeout(typeRole, typingSpeed);
  } 
  else if (isDeleting && charIndex >= 0) {
    // Erase characters
    roleElement.textContent = currentRole.slice(0, charIndex--);
    setTimeout(typeRole, erasingSpeed);
  } 
  else {
    // Move to the next role or toggle erasing
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeRole, delayBetweenRoles);
    } else {
      isDeleting = false;
      charIndex = 0;
      roleIndex = (roleIndex + 1) % roles.length; // Move to next role
      setTimeout(typeRole, typingSpeed);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeRole();
});
