(function(){
  const menu = document.querySelector('[data-menu]');
  if(!menu) return;
  const btn  = menu.querySelector('.menu-button');
  const list = menu.querySelector('.menu-list');
  const open  = () => { list.hidden = false; btn.setAttribute('aria-expanded','true'); };
  const close = () => { list.hidden = true;  btn.setAttribute('aria-expanded','false'); };

  btn.addEventListener('click', () => (
    btn.getAttribute('aria-expanded') === 'true' ? close() : open()
  ));

  document.addEventListener('click', (e) => { if (!e.target.closest('[data-menu]')) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();

// Make all external links open in a new tab
document.querySelectorAll('a[href^="http"]').forEach(link => {
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener');
});
