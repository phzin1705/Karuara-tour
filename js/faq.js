// ===============================
// FAQ KARUARA TOUR
// ===============================

const perguntas = document.querySelectorAll(".faq-question");

perguntas.forEach((pergunta) => {
    pergunta.addEventListener("click", () => {
        const resposta = pergunta.nextElementSibling;
        const aberta = resposta.classList.contains("active");

        document.querySelectorAll(".faq-answer").forEach((item) => {
            item.classList.remove("active");
            item.style.maxHeight = null;
        });

        if (!aberta) {
            resposta.classList.add("active");
            resposta.style.maxHeight = resposta.scrollHeight + "px";
        }
    });
});