<?php
// on se connecte à notre base de données
try {
    $bdd = new PDO('mysql:host=localhost;dbname=fil-rouge;charset=utf8', 'root', 'WataAdmin');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

// si les variables ne sont pas vides

$requete = $bdd->query('SELECT * FROM messages LIMIT 0,10');
$mm = "";

while ($donnees = $requete->fetch()) {
    // on affiche le message (l'id servira plus tard)
    if ($donnees['user_name'] == $_POST['pseudo']) {
        $cl = "maCl";
        $mm = $mm . "<p class='" . $cl . "' >". $donnees['message'] . "</p>";

    } else {
        $cl = "othCl";
        $mm = $mm . "<p class='" . $cl . "' >" . $donnees['user_name'] . " => " . $donnees['message'] . "</p>";

    }
}

$requete->closeCursor();

echo $mm;
