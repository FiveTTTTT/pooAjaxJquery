<?php

namespace App\Structure;

abstract class Site
{

    public function __construct()
    {
    }

    public static function headSite()
    {
?>
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="../css/style.css">
            <title>FEH Sondage</title>
        </head>
    <?php
    }

    public static function headerSite()
    {
    ?>
        <header id="coSql">
            <div class="menu txtMenu">
                <li>
                    <a href="index.php"><img src="../img/logo2.png" alt="logo de FEH Sondage"></a>
                </li>

                <li>
                    <a href="formulaire.php" class="m_con"><img src="../img/icons/lien.png" alt="icon contact">Contact</a>
                </li>
                <li>
                    <a href="results.php" class="m_res"><img src="../img/icons/new.png" alt="icon resultat">Résultats</a>
                </li>
                <li>
                    <a href="introdutcion.php" class="m_acc"><img src="../img/icons/questions.png" alt="icon questions">Questions</a>
                </li>
            </div>
            <div class="bann">
                <img src="../img/logo2.png" alt="logo de FEH Sondage" class="logoBan">
            </div>


        </header>
    <?php
    }

    public static function footerSite()
    {
    ?>
        <footer>
            <div class="menu">
                <li>
                    <a href="formulaire.php" class="m_con">Contact</a>
                </li>
                <li>
                    <a href="results.php" class="m_res">Résultats</a>
                </li>
                <li>
                    <a href="introdutcion.php" class="m_acc">Questions</a>
                </li>
                <li>
                    <a href="connexion.php" class="m_acc">Connexion</a>
                </li>
            </div>
        </footer>
    <?php
    }
    public static function scripts()
    {
    ?>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="../js/jquery-3.4.1.min.js"></script>
        <script src="../js/TweenMax.min.js"></script>
        <script type="text/javascript" src="../js/monscript1.js"></script>
        <script type="text/javascript" src="../js/tchat.js"></script> 
<?php
    }
}


?>