// Função para verificar se um elemento está visível no viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar animações quando um elemento entra no viewport
function animateOnScroll() {
    const elementsToAnimate = document.querySelectorAll('.animate-slide-in');

    elementsToAnimate.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('active');
        }
    });
}

// Adicionar um ouvinte de evento de rolagem para ativar as animações ao rolar
window.addEventListener('scroll', animateOnScroll);

// Ative as animações quando a página carregar
animateOnScroll();