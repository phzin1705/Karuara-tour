// ===============================
// SCRIPT - KARUARA TOUR
// ===============================

// Menu Mobile
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

const botao = document.createElement("div");
botao.className = "menu-mobile";
botao.innerHTML = `
<i class="fa-solid fa-bars"></i>
`;

navbar.appendChild(botao);

botao.addEventListener("click", () => {
    menu.classList.toggle("ativo");

    if (menu.classList.contains("ativo")) {
        botao.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    } else {
        botao.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
});

// Fecha o menu ao clicar em um link
document.querySelectorAll(".menu a").forEach((item) => {
    item.addEventListener("click", () => {
        menu.classList.remove("ativo");
        botao.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    });
});

// Fecha ao redimensionar
window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        menu.classList.remove("ativo");
        botao.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});