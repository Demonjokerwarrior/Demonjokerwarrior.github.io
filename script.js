// Hide the intro video after 7 seconds
window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("introVideoContainer");
    if (intro) {
      intro.style.display = "none";
    }
  }, 5000);

  // Show the content with slide-up animation after 8 seconds
  setTimeout(() => {
    const content = document.querySelector(".content");
    if (content) {
      content.classList.add("show");
    }
  }, 8000);
});
