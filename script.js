const header = document.querySelector("[data-header]");
const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');
const revealItems = document.querySelectorAll(".reveal");
const contactToggle = document.querySelector("[data-contact-toggle]");
const contactToggleLabel = document.querySelector("[data-contact-toggle-label]");
const contactPanel = document.querySelector("[data-contact-panel]");
const contactClose = document.querySelector("[data-contact-close]");
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function updateHeaderState() {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function setContactPanelHeight() {
  if (!contactPanel || !contactPanel.classList.contains("is-open")) {
    return;
  }

  contactPanel.style.maxHeight = `${contactPanel.scrollHeight}px`;
}

function openContactPanel() {
  if (!contactPanel || !contactToggle) {
    return;
  }

  contactPanel.removeAttribute("inert");
  contactPanel.setAttribute("aria-hidden", "false");
  contactPanel.classList.add("is-open");
  contactToggle.setAttribute("aria-expanded", "true");

  if (contactToggleLabel) {
    contactToggleLabel.textContent = "Ocultar contato";
  }

  window.requestAnimationFrame(() => {
    setContactPanelHeight();
    contactPanel.scrollIntoView({
      behavior: motionQuery.matches ? "auto" : "smooth",
      block: "start"
    });
  });
}

function closeContactPanel({ restoreFocus = false } = {}) {
  if (!contactPanel || !contactToggle) {
    return;
  }

  contactPanel.style.maxHeight = `${contactPanel.scrollHeight}px`;
  contactPanel.setAttribute("aria-hidden", "true");
  contactPanel.setAttribute("inert", "");
  contactToggle.setAttribute("aria-expanded", "false");

  if (contactToggleLabel) {
    contactToggleLabel.textContent = "Entrar em contato";
  }

  window.requestAnimationFrame(() => {
    contactPanel.classList.remove("is-open");
    contactPanel.style.maxHeight = "0px";
  });

  if (restoreFocus) {
    contactToggle.focus();
  }
}

function toggleContactPanel() {
  if (!contactPanel) {
    return;
  }

  if (contactPanel.classList.contains("is-open")) {
    closeContactPanel();
    return;
  }

  openContactPanel();
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
window.addEventListener("resize", setContactPanelHeight);

if (contactToggle) {
  contactToggle.addEventListener("click", toggleContactPanel);
}

if (contactClose) {
  contactClose.addEventListener("click", () => closeContactPanel({ restoreFocus: true }));
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && contactPanel?.classList.contains("is-open")) {
    closeContactPanel({ restoreFocus: true });
  }
});
