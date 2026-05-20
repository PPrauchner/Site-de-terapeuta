document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const menuIcon = menuToggle.querySelector("i");

    // Função para abrir/fechar o menu
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        
        // Altera o ícone entre as três listras (hambúrguer) e o 'X' de fechar
        if (navMenu.classList.contains("active")) {
            menuIcon.classList.remove("bi-list");
            menuIcon.classList.add("bi-x");
        } else {
            menuIcon.classList.remove("bi-x");
            menuIcon.classList.add("bi-list");
        }
    });

    // Fecha o menu automaticamente ao clicar em qualquer link (útil para links âncora internos)
    const menuLinks = navMenu.querySelectorAll("a");
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
            menuIcon.classList.remove("bi-x");
            menuIcon.classList.add("bi-list");
        });
    });
});