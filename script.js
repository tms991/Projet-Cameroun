// Lorsque la page est complètement chargée, appliquer l'animation
window.addEventListener('load', function() {
    // Cibler tous les éléments de la section accueil
    const elements = document.querySelectorAll('#accueil h1, #accueil p, #accueil img');
    
    // Ajouter la classe "show" pour déclencher l'animation
    elements.forEach(function(element) {
        element.classList.add('show');
    });
});
