// Menu responsivo do header: alterna o menu hambúrguer e o ícone list/x,
// e fecha o menu ao clicar em qualquer link (útil para âncoras internas).
const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const navMenu = document.querySelector<HTMLElement>('.nav-menu');
const menuIcon = menuToggle?.querySelector('i');

if (menuToggle && navMenu && menuIcon) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    if (navMenu.classList.contains('active')) {
      menuIcon.classList.remove('bi-list');
      menuIcon.classList.add('bi-x');
    } else {
      menuIcon.classList.remove('bi-x');
      menuIcon.classList.add('bi-list');
    }
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuIcon.classList.remove('bi-x');
      menuIcon.classList.add('bi-list');
    });
  });
}
