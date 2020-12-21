



function creaTchat() {

}


$('#envoi').click(function () {

    name = $("#pseudo").val();
    message = $("#message").val();
    console.log("wsh");
    $.ajax({
        url: 'sendTchat.php',
        type: 'POST', // Le type de la requête HTTP, ici devenu POST
        data: 'pseudo=' + name + '&message=' + message, // On fait passer nos variables, exactement comme en GET, au script more_com.php
        dataType: 'html'
    }).done(function (response) {
        console.log(response)
        console.log("wsh^2")

    }).fail(function (response) {
        console.log(response)
        return false;
    })
    charger();
    return true;

});

function charger() {

    setTimeout(function () {
        // on lance une requête AJAX
        $.ajax({
            url: "fetchTchat.php",
            type: 'POST',
            data: 'pseudo=' + name, // On fait passer nos variables, exactement comme en GET, au script more_com.php
            dataType: 'html',
            success: function (html) {
                $('#messages').empty().prepend(html); // on veut ajouter les nouveaux messages au début du bloc #messages
            }
        });

        charger(); // on relance la fonction

    }, 2000); // on exécute le chargement toutes les 2 secondes

}

// charger();
