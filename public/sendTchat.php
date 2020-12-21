<?php
// on se connecte à notre base de données
try {
    $bdd = new PDO('mysql:host=localhost;dbname=fil-rouge;charset=utf8', 'root', 'WataAdmin');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

if (!empty($_POST['pseudo']) and !empty($_POST['message'])) { // si les variables ne sont pas vides
    echo "lol";
    echo $_POST['pseudo'];
    echo $_POST['message'];
    $insertion = $bdd->prepare('INSERT INTO messages (user_name, message) VALUES( :name, :message)');
    $insertion->execute(array(
        'name' => $_POST['pseudo'],
        'message' => $_POST['message']
    ));
    // test:
    //     try {
    //        $re =  $insertion->execute(array(
    //             'name' => $_POST['pseudo'],
    //             'message' => $_POST['message']
    //         ));
    //     } catch (Exception $e) {
    //         echo $e->getMessage();

    //     }

    //     if($re){echo "lol2" ;}
    // print_r( $insertion->errorInfo());
    echo "done";
} else {
    echo "Vous avez oublié de remplir un des champs !";
    echo "fail";
}
