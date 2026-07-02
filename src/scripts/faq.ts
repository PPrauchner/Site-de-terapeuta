// Acordeão de FAQ: ao abrir um item, fecha os demais (comportamento de
// exclusividade). Os <details>/<summary> cuidam do toggle nativo.
const faqItems = document.querySelectorAll<HTMLDetailsElement>('.faq-item');

faqItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Se o item ainda está fechado (prestes a abrir), fecha todos os outros.
    if (!item.hasAttribute('open')) {
      faqItems.forEach((other) => {
        if (other !== item) other.removeAttribute('open');
      });
    }
  });
});
