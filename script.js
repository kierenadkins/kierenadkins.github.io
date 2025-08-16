document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll on click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        const offset = 0; // adjust if you want space from top
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // Highlight active section in nav
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { threshold: 0.3 });

  // Start observing sections
  sections.forEach(section => observer.observe(section));
});


  function toggleSkill(card) {
    // Close all other cards
    document.querySelectorAll('.skill-card').forEach(c => {
      if (c !== card) c.classList.remove('active');
    });
  
    // Toggle the clicked card
    card.classList.toggle('active');
  }
  
  