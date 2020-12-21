<?php

use App\Structure\Site;

require "../Autoloader.php";
Autoloader::register();

Site::headSite(); ?>

<body>
    <?php
    Site::headerSite(); ?>
    <main id="sondage1">
        <br id="entreBr"><br>
        <div class="tpsRest">
            <h3>Ce sondages est fini!</h3>
            <a href="results.php">Résultats</a>
        </div>
    </main>
    <?php 
    Site::footerSite();
    Site::scripts()
    ?>

</body>

</html>