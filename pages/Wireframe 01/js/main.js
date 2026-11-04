/* Interações comuns: menu, modal Pix demonstrativo e dados por fetch. */
(function () {
  'use strict';
  const body = document.body;
  const pagesAt = location.pathname.indexOf('/pages/');
  const root = pagesAt >= 0 ? location.pathname.slice(0, pagesAt + 1) : (body.dataset.root || './');
  const menu = document.getElementById('side-menu');
  const overlay = document.getElementById('menu-overlay');
  const menuButton = document.querySelector('.header-menu');
  const closeButton = document.getElementById('menu-close');
  const accountDropdown = document.querySelector('.account-dropdown');
  let openDialog = null;
  let previousFocus = null;

  function toggleMenu(shouldOpen) {
    if (!menu || !overlay) return;
    body.classList.toggle('menu-open', shouldOpen);
    menu.setAttribute('aria-hidden', String(!shouldOpen));
    overlay.hidden = !shouldOpen;
    if (menuButton) menuButton.setAttribute('aria-expanded', String(shouldOpen));
    if (shouldOpen) closeButton?.focus(); else menuButton?.focus();
  }
  menuButton?.addEventListener('click', () => toggleMenu(true));
  closeButton?.addEventListener('click', () => toggleMenu(false));
  overlay?.addEventListener('click', () => toggleMenu(false));

  function setModal(open) {
    if (!openDialog) return;
    openDialog.hidden = !open;
    body.style.overflow = open ? 'hidden' : '';
    if (open) {
      previousFocus = document.activeElement;
      openDialog.querySelector('.modal-card')?.focus();
    } else {
      previousFocus?.focus();
      openDialog = null;
    }
  }
  document.querySelectorAll('[data-open-modal]').forEach(button => {
    button.addEventListener('click', () => {
      openDialog = document.getElementById(button.dataset.openModal);
      setModal(true);
    });
  });
  document.querySelectorAll('[data-close-modal]').forEach(button => {
    button.addEventListener('click', () => setModal(false));
  });
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', event => { if (event.target === modal) setModal(false); });
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (openDialog && !openDialog.hidden) setModal(false);
    else if (body.classList.contains('menu-open')) toggleMenu(false);
    else if (accountDropdown?.open) accountDropdown.open = false;
  });
  document.addEventListener('click', event => {
    if (accountDropdown?.open && !accountDropdown.contains(event.target)) accountDropdown.open = false;
  });

  function readPath(obj, path) {
    return path.split('.').reduce((value, key) => value == null ? undefined : value[key], obj);
  }
  async function bind() {
    if (!window.BulbeApi) return;
    try {
      const result = await window.BulbeApi.buscarDados(root);
      document.querySelectorAll('[data-bind]').forEach(node => {
        const value = readPath(result, node.dataset.bind);
        if (value !== undefined && value !== null) node.textContent = String(value);
      });
      const bars = document.querySelectorAll('[data-month]');
      const samples = result.fatura?.consumo_historico || [];
      if (bars.length && samples.length) {
        const maximum = Math.max(...samples.map(item => item.kwh));
        bars.forEach(column => {
          const sample = samples.find(item => item.mes === column.dataset.month);
          if (!sample) return;
          const bar = column.querySelector('.usage-bar');
          const value = column.querySelector('[data-chart-number]');
          if (bar) bar.style.height = `${Math.round(sample.kwh / maximum * 110)}px`;
          if (value) value.textContent = sample.kwh;
        });
        const chart = document.querySelector('.usage-chart');
        if (chart) chart.setAttribute('aria-label','Consumo em quilowatt-hora: '+samples.map(p => `${p.mes} ${p.kwh}`).join(', '));
      }
    } catch (err) {
      // O conteúdo inicial em HTML continua visível sem fetch (file://).
      console.warn('Dados de demonstração não carregados. Abra com Live Server.', err);
    }
  }
  bind();
})();
