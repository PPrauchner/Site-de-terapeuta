// Abertura/fechamento dos modais. Gatilhos usam [data-modal-open="<id>"] e
// botões de fechar [data-modal-close="<id>"]. Fecha também ao clicar no
// backdrop (área fora do .modal-content).
function openModal(id: string): void {
  const el = document.getElementById(id);
  if (el) el.style.display = 'flex';
}

function closeModal(id: string): void {
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
}

document.querySelectorAll<HTMLElement>('[data-modal-open]').forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    const id = trigger.dataset.modalOpen;
    if (id) openModal(id);
  });
});

document.querySelectorAll<HTMLElement>('[data-modal-close]').forEach((button) => {
  button.addEventListener('click', () => {
    const id = button.dataset.modalClose;
    if (id) closeModal(id);
  });
});

window.addEventListener('click', (event) => {
  document.querySelectorAll<HTMLElement>('.modal').forEach((modal) => {
    if (event.target === modal) modal.style.display = 'none';
  });
});
