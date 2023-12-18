 // Attend que le DOM soit complètement chargé
 document.addEventListener('DOMContentLoaded', function() {
     // Anime.js staggered fade-in animation
     anime({
         targets: ['.titre1', '.titre2', 'iframe'],
         opacity: 1,
         easing: 'easeInOutQuad',
         duration: 1500,
         delay: anime.stagger(200) // Décalage entre les éléments
     });
 });