
document.getElementById('navToggle').addEventListener('click', function () {
  const nav = document.getElementById('siteNav');
  const expanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', (!expanded).toString());
  nav.classList.toggle('open');
});
