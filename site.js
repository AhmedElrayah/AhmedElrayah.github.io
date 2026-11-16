const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.navlinks');
toggle?.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(expanded));
  links.classList.toggle('open', expanded);
});
links?.addEventListener('click', event => {
  if (event.target.closest('a')) {
    toggle.setAttribute('aria-expanded', 'false');
    links.classList.remove('open');
  }
});
document.querySelector('[data-print-statement]')?.addEventListener('click', () => {
  document.body.classList.add('print-statement');
  window.print();
});
window.addEventListener('afterprint', () => document.body.classList.remove('print-statement'));
