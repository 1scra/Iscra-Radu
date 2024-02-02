 // Attend que le DOM soit complètement chargé

 document.addEventListener('DOMContentLoaded', function() {
     // Anime.js staggered fade-in animation
     anime({
         targets: ['.titre1', '.titre2'],
         opacity: 1,
         easing: 'easeInOutQuad',
         duration: 1500,
         delay: anime.stagger(200),
         complete: function(anim) {
             console.log("Opacité après animation :", anime.get('.titre1', 'opacity'));
         }
     });

 });