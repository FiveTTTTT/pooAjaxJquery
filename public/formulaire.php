<?php

use App\Structure\Site;

require "../Autoloader.php";
Autoloader::register();



Site::headSite(); ?>

<body>
    <?php
    Site::headerSite(); ?>
    <main>
        <div class="formu">
            <h3>Vous avez des questions ou des retours à nous faire passer?</h3>
            <input type="text" name="retour" id="" required>
            <input type="button" value="Envoyer">
        </div>
    </main>
    <br>
    <br>
    <br>
    <br>
    <?php
    Site::footerSite();
    Site::scripts()
    ?>

</body>

</html>