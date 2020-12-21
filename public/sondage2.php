<?php

use App\Structure\Site;

require "../Autoloader.php";
Autoloader::register();



Site::headSite(); ?>

<body>
    <?php
    Site::headerSite(); ?>
    <main id="mains">
        <h1 id="titreSond2">Sondage</h1>
        <br id="entreBr"><br>
    </main>
    <?php 
    Site::footerSite();
    Site::scripts()
    ?>
    
</body>

</html>