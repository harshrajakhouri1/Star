// Toggle mobile menu (placeholder function)
function toggleMobileMenu() {
  alert("Mobile menu toggle would open navigation here.");
  // You can enhance this later with real mobile menu logic
}

// Animate elements on scroll
document.addEventListener("DOMContentLoaded", () => {
  const animateOnScrollElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  animateOnScrollElements.forEach((el) => {
    observer.observe(el);
  });

  // Form submission (prevent default)
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent!");
    form.reset();
  });

  // Generate stars (simple version)
  const starfield = document.getElementById("starfield");
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.style.position = "absolute";
    star.style.width = Math.random() * 3 + "px";
    star.style.height = star.style.width;
    star.style.backgroundColor = "#fff";
    star.style.borderRadius = "50%";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.opacity = Math.random() * 0.8 + 0.2;
    star.style.animation = `starDriftHorizontal ${Math.random() * 6 + 4}s ease-in-out infinite alternate, starDriftVertical ${Math.random() * 8 + 6}s ease-in-out infinite alternate`;
    starfield.appendChild(star);
  }

  // Shooting star effect
  setInterval(() => {
    const shootingStar = document.createElement("div");
    shootingStar.style.position = "absolute";
    shootingStar.style.width = "4px";
    shootingStar.style.height = "4px";
    shootingStar.style.backgroundColor = "#fff";
    shootingStar.style.borderRadius = "50%";
    shootingStar.style.left = "-100px";
    shootingStar.style.top = Math.random() * 100 + "vh";
    shootingStar.style.boxShadow = "0 0 10px 2px rgba(255, 255, 255, 0.8)";
    shootingStar.style.animation = "shootingStar 3s ease-out forwards";
    starfield.appendChild(shootingStar);

    setTimeout(() => {
      shootingStar.remove();
    }, 3000);
  }, 5000);
});