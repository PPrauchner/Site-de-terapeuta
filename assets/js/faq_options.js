// Seleciona todos os itens de detalhes do FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        // Se o item for clicado para abrir
        if (!item.hasAttribute('open')) {
            // Fecha todos os outros itens
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.removeAttribute('open');
                }
            });
        }
    });
});