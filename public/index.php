<?php

use App\Structure\Site;

require "../Autoloader.php";
Autoloader::register();

Site::headSite(); ?>

<body>
    <?php
    Site::headerSite(); ?>
    <main>
        <h1>A quel sondage voulez-vous participer?</h1>
        <br>
        <div id="sondage sondage1" class="fini">
            <h3>Pamis les personnages principaux de la série qui n'ont pas encore de version Brave lequel gagnera la prochaine fois?</h3>
            <a href="Sondage1.php">PARTICIPER !</a>
            <p>RESULTATS</p>
        </div>
        <br>
        <div id="sondage sondage2">
            <h3>Selon vous, quel est le meilleur livre de FEH?</h3>
            <a href="Sondage2.php">PARTICIPER !</a>
            <p>RESULTATS</p>
        </div>

    </main>
    <br>
    <?php 
    Site::footerSite();
    Site::scripts()
    ?>
</body>

</html>