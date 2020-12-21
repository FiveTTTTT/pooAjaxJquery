<?php

use App\Structure\Site;

require "../Autoloader.php";
Autoloader::register();

    Site::headSite(); ?>
<body>
    <?php
    Site::headerSite(); ?>
    
    <main class="intro">
        <h1>FEH Sondage</h1>
        <p>Bienvenue sur FEH Sondage!</p>
        <p>Avant de passer aux sondages en eux même nous vous proposons une presentation de la plateforme à la manière d'une foire aux questions</p>
        <br>
        <ul>
            <li>
                <h3>De quoi parle FEH Sondage?</h3>
            </li>
            <p>C'est une plateforme qui organise des sondages sur l'univers des jeux de la série Fire Emblem et plus particulièrement le jeux sur mobile, Fire Emblem Heroes(FEH)</p>
            <br>
            <li>
                <h3>Comment se déroules les sondages?</h3>
            </li>
            <p>Tous les 3 jours les joueurs pourront participer à un ou plusieurs nouveaux sondages, qui se termineront 3 jours plus tard. </p>
            <p>A la fin de chaque sondage les joueurs ayant voté pour la réponse avec le plus de votes gagneront des points. Le nombres de points gagné sera réinnitialisé au bout de un mois </p>
            <br>
            <li>
                <h3>A quoi servent les points?</h3>
            </li>
            <p>Au bout d'un mois 45% des joueurs ayant eu le plus de poins au cour du mois recevront des orbes dans leurs jeux FEH</p>
        </ul>
        <br>
        <p>Si vous avez d'autres questions n'hésitez pas à nous les poser <span><a href="contacte.php"></a>ici</span></p>
        <p>Sinon nous vous proposons de choisir un sondage auquel participer: </p>
        <a href="index.php" class="letsGo">CHOISIR UN SONDAGE !</a>

    </main>

    <?php 
    Site::footerSite();
    Site::scripts()
    ?>
</body>

</html>