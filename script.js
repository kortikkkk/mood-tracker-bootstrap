document.addEventListener('DOMContentLoaded', function () {
  const faqHeaders = document.querySelectorAll('.faq-item h3');

  faqHeaders.forEach(header => {
    const icon = header.querySelector('i.bi-chevron-right');
    const targetSelector = header.getAttribute('data-bs-target');
    if (!targetSelector) return;
    const collapseEl = document.querySelector(targetSelector);

    collapseEl.addEventListener('show.bs.collapse', () => {
      icon.classList.add('rotated');
    });
    collapseEl.addEventListener('hide.bs.collapse', () => {
      icon.classList.remove('rotated');
    });
  });

  const navLinks = document.querySelectorAll('#mainNavbar .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
