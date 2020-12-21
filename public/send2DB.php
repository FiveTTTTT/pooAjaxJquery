<?php
// on se connecte à notre base de données
try {
    $bdd = new PDO('mysql:host=localhost;dbname=fil-rouge;charset=utf8', 'root', 'WataAdmin');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}
echo $_POST['pseudo'];
echo $_POST['email'];
echo $_POST['mdp'];

if (!empty($_POST['pseudo']) and !empty($_POST['email']) and !empty($_POST['mdp'])) { // si les variables ne sont pas vides

    // plusieurs nom
    $insertion = $bdd->prepare('INSERT INTO user VALUES(null, :name, :mdp, :mail)');
    $insertion->execute(array(
        'name' => $_POST['pseudo'],
        'mail' => $_POST['email'],
        'mdp' => $_POST['mdp']

    ));
} else {
    echo "Vous avez oublié de remplir un des champs !";
}
