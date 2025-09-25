// Smooth scroll active link highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

// Datasets
const datasetCards = document.querySelectorAll('.dataset-card');
const datasetDownloads = document.querySelectorAll(".dataset-downloads-collapsible");
const datasetSources = document.querySelectorAll(".dataset-sources-collapsible");

// Scroll highlight
window.addEventListener('scroll', () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Hamburger menu toggle
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Close menu when clicking a link (mobile)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});

// Dataset
// Card description collapse
datasetCards.forEach(card => {
  const desc = card.querySelector(".dataset-card-desc");
  const btn = card.querySelector(".dataset-card-toggle");

  btn.addEventListener('click', () => {
    desc.classList.toggle('expanded');
    btn.textContent = desc.classList.contains('expanded') ? "Hide" : "Read more";
  });
});

// Download collapsible
datasetDownloads.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.classList.toggle('open');
    console.log(content);
  });
});

// Download collapsible
datasetSources.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.classList.toggle('open');
    console.log("CLCIKED");
  });
});