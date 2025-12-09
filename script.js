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







<script>
(function(){

  const dragon = document.getElementById("floatingDragon");
  const svg = document.getElementById("miniDragon");
  const head = svg.querySelector("#head");
  const wing = svg.querySelector("#wing");
  const tailGlow = svg.querySelector("#tailGlow");

  const state = { tx: 0, ty: 0, x: 0, y: 0, ease: 0.12, active: false };

  // Track mouse anywhere on the page
  document.addEventListener("pointermove", (e) => {
    const nx = (e.clientX / window.innerWidth - 0.5) * 2;  // [-1,1]
    const ny = (e.clientY / window.innerHeight - 0.5) * 2;

    state.tx = nx * 50;  // dragon follows sideways
    state.ty = ny * 30;  // dragon follows vertical

    if (!state.active) {
      state.active = true;
      svg.classList.add("dragon-glow");
      dragon.classList.add("dragon-active");
    }
  });

  // Smooth animation loop
  function animate(){
    state.x += (state.tx - state.x) * state.ease;
    state.y += (state.ty - state.y) * state.ease;

    // move whole dragon
    dragon.style.transform =
      `translate(${state.x}px, ${state.y}px) scale(${1 + Math.abs(state.x)*0.005})`;

    // rotate head & wing slightly
    head.setAttribute("transform", `translate(70,48) rotate(${state.x * 0.5})`);
    wing.setAttribute("transform", `translate(10,30) rotate(${state.x * 1.3})`);

    // glow intensity based on movement
    tailGlow.style.strokeOpacity = Math.min(1, (Math.abs(state.x) + Math.abs(state.y)) * 0.05);

    requestAnimationFrame(animate);
  }
  animate();

})();
</script>

