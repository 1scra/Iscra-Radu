<div>

    <div class="project-container">
        
        <div class="project-description">
            <h2>Projet WordPress : Catalogue de Produits et Diagnostic Mac</h2>
            <p>Bienvenue sur la page de présentation de mon projet WordPress innovant. J'ai créé un template unique qui intègre un catalogue de produits avancé ainsi qu'une fonctionnalité de diagnostic pour les utilisateurs de Mac.</p>

            <div class="project-image" style="background-image: url('lien_de_ta_photo1.jpg');"></div>

            <p>Le catalogue de produits offre une expérience utilisateur fluide et dynamique, grâce à l'utilisation de JavaScript pour la navigation et la recherche. Chaque produit est soigneusement présenté, fournissant des informations détaillées et des options d'achat directes.</p>

            <div class="project-image" style="background-image: url('lien_de_ta_photo2.jpg');"></div>

            <p>Une fonctionnalité unique de ce projet est la widget de diagnostic Mac. Les utilisateurs peuvent soumettre les problèmes de leur Mac, et la widget propose une estimation de prix pour la réparation, basée sur des algorithmes sophistiqués et des bases de données de coûts.</p>

            <p>Voici un extrait du code JavaScript utilisé pour la fonctionnalité de diagnostic :</p>
            <pre>
            // Fonction pour charger le contenu
             function loadContent(url) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    contenuElement.innerHTML = xhr.responseText;
                    reloadModalEvents();
                    // Une fois le contenu chargé, sauvegardez-le dans le localStorage
                    localStorage.setItem('contenuActuel', xhr.responseText);
                }
            };
            </pre>
        </div>
    </div>
</div>