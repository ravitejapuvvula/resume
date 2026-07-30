/* ===== Footer year ===== */
document.getElementById("year").textContent = new Date().getFullYear();

/* ===== Navbar: scrolled state + mobile toggle ===== */
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav__links");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

/* ===== Typewriter role text ===== */
const roles = [
  "agentic AI systems",
  "RAG pipelines",
  "multi-agent orchestration",
  "LLM-powered products",
  "intelligent automation",
];
const roleEl = document.getElementById("roleText");
let roleIdx = 0;
let charIdx = 0;
let deleting = false;

function typeLoop() {
  const current = roles[roleIdx];
  charIdx += deleting ? -1 : 1;
  roleEl.textContent = current.slice(0, charIdx);

  let delay = deleting ? 45 : 90;
  if (!deleting && charIdx === current.length) {
    delay = 1800;
    deleting = true;
  } else if (deleting && charIdx === 0) {
    deleting = false;
    roleIdx = (roleIdx + 1) % roles.length;
    delay = 400;
  }
  setTimeout(typeLoop, delay);
}
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  typeLoop();
} else {
  roleEl.textContent = roles[0];
}

/* ===== Reveal on scroll ===== */
const revealTargets = document.querySelectorAll(
  ".section, .timeline__item, .project, .skills__group"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealTargets.forEach((el) => observer.observe(el));

/* ===== Neural network background animation ===== */
(function neuralBackground() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const canvas = document.getElementById("neural-bg");
  const ctx = canvas.getContext("2d");
  let width, height, nodes;
  const DENSITY = 0.00009; // nodes per pixel
  const MAX_DIST = 140;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const count = Math.min(120, Math.floor(width * height * DENSITY));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;

      // connections
      for (let j = i + 1; j < nodes.length; j++) {
        const m = nodes[j];
        const dx = n.x - m.x;
        const dy = n.y - m.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.5;
          ctx.strokeStyle = `rgba(109, 94, 252, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(m.x, m.y);
          ctx.stroke();
        }
      }

      // node
      ctx.fillStyle = "rgba(34, 211, 238, 0.7)";
      ctx.beginPath();
      ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
})();
