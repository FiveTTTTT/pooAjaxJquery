<?php
// on se connecte à notre base de données
try {
    $bdd = new PDO('mysql:host=localhost;dbname=fil-rouge;charset=utf8', 'root', 'WataAdmin');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

// si les variables ne sont pas vides

$requete = $bdd->query('SELECT * FROM messages ORDER BY id DESC LIMIT 0,7');
$mm = "";

while ($donnees = $requete->fetch()) {
    // on affiche le message (l'id servira plus tard)
    if ($donnees['user_name'] == $_POST['pseudo']) {
        $cl = "maCl";
        $mm =  "<p class='" . $cl . "' >".$donnees['id']."=". $donnees['message'] . "</p>".$mm ;

    } else {
        $cl = "othCl";
        $mm =  "<p class='" . $cl . "' >".$donnees['id']."=" . $donnees['user_name'] . " => " . $donnees['message'] . "</p>".$mm;

    }
}

$requete->closeCursor();

echo $mm;
