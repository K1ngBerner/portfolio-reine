const header = document.querySelector("[data-header]");
const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');
const revealItems = document.querySelectorAll(".reveal");

function updateHeaderState() {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

// Pequenas entradas de conteúdo mantêm a página viva sem pesar na navegação.
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0.01
    }
  );

  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));

    if (section) {
      navObserver.observe(section);
    }
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });
