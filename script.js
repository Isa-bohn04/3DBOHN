function irParaSecao(pagina){
    window.location.href = pagina;
}

// Scroll suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        const href = this.getAttribute('href');

        if (href.startsWith('#')) {
            e.preventDefault();

            const destino = document.querySelector(href);

            if (destino) {
                destino.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }

    });
});
