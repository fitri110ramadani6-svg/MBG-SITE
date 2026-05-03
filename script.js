// Inisialisasi AOS (Animasi Scroll)
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// Inisialisasi Lucide Icons
lucide.createIcons();

// Logika Intro Animation
window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("intro-screen");
    if (intro) {
      intro.style.transform = "translateY(-100%)";
      document.body.style.overflow = "auto";
    }
  }, 2500);
});

// Sticky Navbar Effect
const nav = document.getElementById("main-nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.classList.add("nav-glass", "shadow-md");
    nav.classList.remove("text-white");
  } else {
    nav.classList.remove("nav-glass", "shadow-md");
    nav.classList.add("text-white");
  }
});

// Mencegah scroll saat intro berjalan
document.body.style.overflow = "hidden";
