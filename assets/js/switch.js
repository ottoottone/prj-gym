(() => {
  const tabs = [...document.querySelectorAll('.set-tab')];
  const panels = [...document.querySelectorAll('.plan-panel')];
  if (!tabs.length || !panels.length) return;
  const select = (id, moveFocus = false) => {
    tabs.forEach((tab) => {
      const active = tab.dataset.set === id;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      if (moveFocus && active) tab.focus();
    });
    panels.forEach((panel) => {
      const active = panel.id === id;
      panel.classList.toggle('is-visible', active);
      panel.hidden = !active;
    });
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab.dataset.set));
    tab.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();
      const next = event.key === 'ArrowRight' ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
      select(tabs[next].dataset.set, true);
    });
  });
  select(tabs.find((tab) => tab.classList.contains('is-active'))?.dataset.set || tabs[0].dataset.set);
})();
