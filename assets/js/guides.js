(() => {
  const openers = [...document.querySelectorAll('.exercise-open')];
  const dialogs = [...document.querySelectorAll('.exercise-modal')];
  if (!openers.length) return;
  const closeAll = () => dialogs.forEach((dialog) => dialog.close());
  openers.forEach((button) => {
    button.addEventListener('click', () => {
      const dialog = document.getElementById(button.dataset.modal);
      if (dialog) dialog.showModal();
    });
  });
  dialogs.forEach((dialog) => {
    dialog.querySelector('[data-close]').addEventListener('click', closeAll);
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  });
})();
