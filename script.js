// Jem Karaceylan — about-me
// Tiny: year stamp + reveal-on-scroll. No framework, no deps.

(() => {
  'use strict';

  // Year stamp
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Reveal-on-scroll — uses IntersectionObserver, respects reduced-motion in CSS
  const revealTargets = document.querySelectorAll('.card, .project, .now li, .section__head, .meta');
  revealTargets.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    // Fallback: just show everything
    revealTargets.forEach((el) => el.classList.add('is-in'));
  }
})();
