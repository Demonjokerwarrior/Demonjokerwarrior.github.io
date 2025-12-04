// Hide Intro Video After 5 Seconds
window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("introVideoContainer");
    if (intro) intro.style.display = "none";
  }, 5000);

  // Reveal Content
  setTimeout(() => {
    document.querySelector(".hero-box").style.opacity = "1";
  }, 5500);

  // Scroll Reveal Animation
  const sections = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});
