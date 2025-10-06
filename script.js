// Scroll animation
const elements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));


  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('navMenu');
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });

