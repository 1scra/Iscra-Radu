<!---------------------------------------------->

<div id="contForm">
  <div id="backG">
    <div id="formTab">
      <form action="Back-end\traitement.php" method="POST">
        <div>
        
        <label for="nom">Votre nom</label>
        <input type="text" id="nom" name="nom" placeholder="Martin" required>
        </div>
        <div>
        <label for="email">Votre e-mail</label>
        <input type="email" id="email" name="email" placeholder="monadresse@mail.com" required>
        </div>
        <div>
        <label for="sujet">Quel est le sujet de votre message ?</label>
        <select name="sujet" id="sujet" required>
        <option value="" disabled selected hidden>Choisissez le sujet de votre message</option>
        <option value="Proposer-un-projet">Proposer un projet</option>
        <option value="Proposer-un-stage">Proposer un stage</option>
        <option value="Recrutement">Recrutement</option>
        <option value="autre">Autre...</option>
        </select>
        </div>
        <div>
        <label for="message">Votre message</label>
        <textarea id="message" name="message" maxlength="250" placeholder="Bonjour, je vous contacte car...." required></textarea>
        </div>
        <div>
        <button id="envoyer" name="envoyer" type="submit"><p>Envoyer mon message</p> </button>
        </div>
        
        </form>

    </div>
    <div id="textForm">
        <h1 style="color: #ff8e3c; font-family:'Monoton', cursive;">Contactez</h1>
        <h2 class="neonAnimC">moi maintenant</h2><br>
        <p>Je suis ouvert à tous types de projets dans le domaine de l'informatique, en particulier dans le développement web.</p><br>
        
    </div>
  </div>
</div>