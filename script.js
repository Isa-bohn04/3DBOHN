function irParaSecao(pagina){
    window.location.href = pagina;
}

// Scroll suave
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
      
            behavior: 'smooth'
        });
    });
});
