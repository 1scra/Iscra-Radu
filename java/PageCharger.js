document.addEventListener('DOMContentLoaded', function() {

    // Sélectionnez l'élément de contenu et les liens de navigation
    var contenuElement = document.getElementById('contenuElement');
    var navigationLinks = document.querySelectorAll('nav a');

    // Fonction pour charger le contenu
    function loadContent(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                contenuElement.innerHTML = xhr.responseText;

                // Vérifiez si le contenu actuel est "contenu3.php" et appelez reloadModalEvents si nécessaire
                if (url.includes('contenu3.php')) {
                    setTimeout(reloadModalEvents, 0);
                }

                // Une fois le contenu chargé, sauvegardez-le dans le localStorage
                localStorage.setItem('contenuActuel', xhr.responseText);
            }
        };

        xhr.send();
    }


    // Écoutez le clic sur chaque bouton de navigation
    navigationLinks.forEach(function(link, index) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Empêchez le comportement par défaut du lien

            var contentURL = `Pages/contenu${index + 1}.php`; // Construisez l'URL du fichier de contenu

            // Chargez le contenu depuis le fichier externe
            loadContent(contentURL);
        });
    });

    // Au chargement de la page, vérifiez s'il y a un contenu précédemment sauvegardé dans le localStorage
    var contenuSauvegarde = localStorage.getItem('contenuActuel');
    if (contenuSauvegarde) {
        contenuElement.innerHTML = contenuSauvegarde;
    } else {
        // Si aucun contenu n'est sauvegardé, chargez le contenu par défaut
        loadContent('Pages/contenu1.php');
    }

    //-------------------------------------------------


    var navigationLinks = document.querySelectorAll('nav a');
    var lienActifName = localStorage.getItem('activeNavName'); // Récupérez le "name" depuis le localStorage

    // Fonction pour supprimer l'ID du bouton par défaut
    function removeDefaultId() {
        var defaultLink = document.querySelector('nav a[id="activeNav"]');
        if (defaultLink) {
            defaultLink.removeAttribute('id');
        }
    }

    // Écoutez le clic sur chaque bouton de navigation
    navigationLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Supprimez l'ID du bouton par défaut
            removeDefaultId();

            // Ajoutez l'ID "activeNav" au lien actuel
            this.id = 'activeNav';
            var name = this.getAttribute('name');
            localStorage.setItem('activeNavName', name); // Enregistrez le "name" dans le localStorage
        });
    });

    // Supprimez l'ID du bouton par défaut lors du chargement de la page
    removeDefaultId();

    // Restaurez l'ID de l'élément actif depuis le localStorage
    if (lienActifName) {
        var activeLink = document.querySelector('nav a[name="' + lienActifName + '"]');
        if (activeLink) {
            activeLink.id = 'activeNav';
        }
    }

});