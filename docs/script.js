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
  const collapsible = card.querySelector(".dataset-collapsible");

  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
    collapsible.classList.toggle('expanded');

  });
});

// Download collapsible
datasetDownloads.forEach(btn => {
  btn.addEventListener('click', (event) => {
    event.stopPropagation();  // Stops the collapse of the parents

    const content = btn.nextElementSibling;
    content.classList.toggle('open');
    console.log(content);
  });
});

// Download collapsible
datasetSources.forEach(btn => {
  btn.addEventListener('click', (event) => {
    event.stopPropagation();  // Stops the collapse of the parents
    
    const content = btn.nextElementSibling;
    content.classList.toggle('open');
    console.log("CLICKED");
  });
});

// Subsection collapse toggle
const subsectionHeaders = document.querySelectorAll('.subsection-header');

subsectionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    // Toggle classes
    content.classList.toggle('open');
    header.classList.toggle('active');
  });
});