// Smooth Scroll
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Animated Welcome Message
  const welcomeMessage = document.getElementById("welcome-message");
  let message = "Welcome to MD SHAHJAHAN's Website!";
  let i = 0;
  
  function typeMessage() {
    if (i < message.length) {
      welcomeMessage.textContent += message.charAt(i);
      i++;
      setTimeout(typeMessage, 100); // Typing effect speed
    }
  }
  welcomeMessage.textContent = ""; // Clear initial content
  typeMessage();
  
  // Theme Toggle (Dark/Light Mode)
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  // Form Validation
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
  
    if (!name) {
      alert("Name is required!");
    } else if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please provide a valid email address!");
    } else {
      alert("Thank you for your message!");
      form.reset();
    }
  });
  