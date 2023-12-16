<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ISCRA Radu</title>
  <?php include("Back-end\links-connect.php");  ?>
</head>
<body>

  <div class="d-flex w-100">
   
      <!------------NAV------------->
      <div class="nav d-flex flex-column justify-content-between">
          <div class="d-flex w-100 justify-content-center mt-5">
           <?php include("Media\logo.svg"); ?>
          </div>

          <nav class="nav1">
            <a name="accueil" id="activeNav" href=""><span class="material-symbols-outlined   ">window</span>Accueil</a>
            <a name="moi"     href=""><span class="material-symbols-outlined ">description</span>Competences</a>
            <a name="projets" href=""><span class="material-symbols-outlined ">note_add</span>Nouvelles Saisies</a>
            <a name="veille"  href=""><span class="material-symbols-outlined ">note_add</span>Nouvelles Saisies</a>
            <a name="contact" href=""><span class="material-symbols-outlined ">note_add</span>Nouvelles Saisies</a>
          </nav>

          <div class="d-flex justify-content-center w-100 mb-4">
            <a  class="socialM" href=""><?php include("Media\gitHub.svg"); ?></a>
            <a  class="socialM" href=""><?php include("Media\insta.svg"); ?></a>
            <a  class="socialM" href=""><?php include("Media\linkedIn.svg"); ?></a>
          </div>
      </div>
      <!------------Autre contenue----->
      <div id="contenuElement" class="container-fluid p-5">
        
      </div>
   


  </div>





  <?php include("Back-end\scripts.php");  ?>
</body>
</html>