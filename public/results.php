<?php

use App\Structure\Site;

require "../Autoloader.php";
Autoloader::register();

Site::headSite(); ?>

<body>
    <?php
    Site::headerSite(); ?>
    <main>
        <h3>Sondage numéro 1</h3>
        <ul class="resultats res1">
            <li class="resAlf">
                <p>Alfonse</p>
                <p class="pourcent">8%</p>
            </li>
            <li class="resMar">
                <p>Marth</p>
                <p class="pourcent">32%</p>
            </li>
            <li class="resSel">
                <p>Seliph</p>
                <p class="pourcent">23%</p>
            </li>
            <li class="resLei">
                <p>Leif</p>
                <p class="pourcent">10%</p>
            </li>
            <li class="resChr">
                <p>Chrom</p>
                <p class="pourcent">5%</p>
            </li>
            <li class="resCor">
                <p>Corrin</p>
                <p class="pourcent">8%</p>
            </li>
            <li class="resByl">
                <p>Byleth</p>
                <p class="pourcent">14%</p>
            </li>
        </ul>
        <h2>Marth est le plus populaire!</h2>
        <div class="gains no-participation">
            Vous aviez voté pour <span></span> vous avez gagné <span></span>points
        </div>
        <p><span>Il semblerai que vous n'ayez pas participé à ce sondage vous ne gagnez donc aucun points</span></p>


        <br><br>

        <h3>Sondage numéro 2</h3>
        <p>Ce sondage n'est pas encore fini.</p>

        <!-- Tchat avec l'ajax -->
        <div class="tchat">
            <div id="messages">

            </div>
            
            <!-- action="sendTchat.php"-->
            <form method="POST" id="frm">
                <input type="text" name="pseudo" id="pseudo" readonly /><br />
                <input type="text" name="message" id="message"></input><br />
                <input type="button" name="submit" value="Envoyez votre message !" id="envoi" />
            </form>
        </div>




    </main>

    <?php
    Site::footerSite();
    Site::scripts()
    ?>
</body>

</html>