// Fonction pour initialiser les événements de la fenêtre modale
function initModalEvents() {
    // Récupérez tous les boutons de projet
    var projectButtons = document.querySelectorAll('.projetBtn');

    // Ajoutez un gestionnaire d'événements à chaque bouton de projet
    projectButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            // Récupérez le nom du projet à partir de l'attribut data-projet
            var projectName = button.getAttribute('data-projet');

            // Chargez le contenu du fichier correspondant au projet
            fetch('Projets/' + projectName + '.php')
                .then(function(response) {
                    return response.text();
                })
                .then(function(data) {
                    // Affichez le contenu dans la fenêtre modale
                    document.getElementById('modal-content').innerHTML = data;
                    document.getElementById('modal').style.display = 'block';
                    document.getElementById('modal-background').style.display = 'block';
                });
        });
    });

    // Ajoutez un gestionnaire d'événements pour le bouton de fermeture de la fenêtre modale
    document.getElementById('close-modal').addEventListener('click', function() {
        document.getElementById('modal').style.display = 'none';
        document.getElementById('modal-background').style.display = 'none';
    });
}

// Appel initial pour les pages qui ne nécessitent pas de chargement dynamique
initModalEvents();

// Utilisez cette fonction pour réinitialiser les événements après le chargement dynamique
function reloadModalEvents() {
    initModalEvents();
}