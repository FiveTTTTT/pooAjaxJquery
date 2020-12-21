var fondCo = document.createElement('div');
fondCo.id = "fondCoId"
fondCo.className = "fondCoClasse"
var formCo = document.createElement('form');
formCo.id = "formCoId"
formCo.className = "formCoClasse"
const nameMailMdpCo = ["Votre nom", "Votre addresse email", "Votre mot de passe"]
const classeNMMCo = ["pseudo", "mail", "mdp"]
var isPseudo = false;
var name = "";
var email = "";
var mdp = "";
// var oops = document.createElement('p');
// oops.id=""
// oops.innerHTML="oops il semblerait que vous ayez été déconecté!"
// document.getElementById("oopsCoId ").appendChild(attenduCo);

// create the connection popUp 
function popUpCo() {
    if (!isPseudo) {
        fondCo.style.backgroundColor = " rgba(0,0,0,0.5)";
        fondCo.style.position = " fixed ";
        fondCo.style.width = " 100% ";
        fondCo.style.height = " 100% ";
        fondCo.style.zIndex = "1";
        fondCo.style.display = " flex ";
        fondCo.style.justifyContent = "center";
        fondCo.style.alignItems = "center";
        fondCo.style.flexDirection = "column"

        formCo.style.backgroundColor = " red";
        formCo.style.width = " 60% ";
        formCo.style.borderRadius = "211px";
        formCo.style.padding = "7vh";
        formCo.style.display = " flex ";
        formCo.style.justifyContent = "center";
        formCo.style.alignItems = "center";
        formCo.style.flexDirection = "column"

        document.body.insertBefore(fondCo, coSql);
        document.getElementById("fondCoId").appendChild(formCo);

        affichChamps();

        var tlCo = new TimelineMax();
        tlCo.staggerFrom('.fondCoClasse', 0.1, { x: 0, y: 0, opacity: 0 });
        tlCo.staggerFrom('.formCoClasse', 1, { x: 0, y: 100, opacity: 0 });
        // destroyThat(tlCo)
        // console.log(destroyThat(tlCo))
        // if (destroyThat(tlCo)) {
        //     affichePseudo(name)
        // }
    }
}

// create 3 
function affichChamps() {

    for (let i = 0; i < nameMailMdpCo.length; i++) {

        var formCoNmm = document.createElement('div');
        const nMM = nameMailMdpCo[i];
        var contenuCo = document.createElement('p');
        contenuCo.innerHTML = nMM;
        var attenduCo = document.createElement('input');
        attenduCo.type = "text";
        attenduCo.name = classeNMMCo[i];
        attenduCo.className = classeNMMCo[i];
        // attenduCo.required = true;

        document.getElementById("formCoId").appendChild(contenuCo);
        document.getElementById("formCoId").appendChild(attenduCo);


    }

    var subCo = document.createElement('input');
    subCo.type = "button";
    subCo.method = "POST";
    subCo.className = "buttonCo"
    subCo.innerHTML = "se connecter"
    // subCo.onclick="destroyThat(fondCo)"

    subCo.value = "Me connecter";
    document.getElementById("formCoId").appendChild(subCo);



}

popUpCo()

function destroyThat() {
     
    // co.reverse();
    fondCo.style.display = "none";
    // fondCo.style.zIndex = "-2";

    return isPseudo
}

$('.buttonCo').click(function () {
    name = $(".pseudo").val();
    email = $(".mail").val();
    mdp = $(".mdp").val();
    if (controlChamp()) {
        $.ajax({
            url: 'send2DB.php',
            type: 'POST', // Le type de la requête HTTP, ici devenu POST
            data: 'pseudo=' + name + '&email=' + email + '&mdp=' + mdp, // On fait passer nos variables, exactement comme en GET, au script more_com.php
            dataType: 'html'
        }).done(function (response) {

            console.log(response)

        }).fail(function (response) {

            console.log(response)
            return false;
        })

        isPseudo = true;
        charger();
        destroyThat();
    }
    else {
        return false;
    }

    v = document.getElementById("pseudo")
    v.value=name;

    return true;

});

function controlChamp() {
    var ret = false;
    name = $(".pseudo").val();
    if (name.length > 0) {
        ret = true;
    }
    else {
        var needNameCo = document.createElement('p');
        needNameCo.innerHTML = "Vous devez indiquer un pseudo d'au moins 5 character";
        document.getElementById("formCoId").appendChild(needNameCo);

    }
    // etc ...


    return ret;
}









// function affichePseudo(nom) {
//     var affPseu = document.createElement('div');
//     affPseu.id = "affPseuId"
//     affPseu.style.backgroundColor = " red";
//     affPseu.style.position = " fixed ";
//     affPseu.style.borderRadius = "211px";
//     affPseu.style.padding = "2vh";
//     affPseu.style.width = "100px"
//     affPseu.style.zIndex = "2";
//     affPseu.style.display = " flex ";
//     affPseu.style.flexDirection = "raw-reverse"
//     affPseu.innerHTML = nom;
//     document.body.appendChild(affPseu);
// }








// const tabY = [0, 1, 2, 3]
// for (let i = 0; i < tabY.length; i++) {
//     const element = tabY[i];
//     const element2 = tabY[i] + 2;

//     strelement = element.toString()
//     strelement2 = element2.toString()
//     var oops = document.createElement('p');
//     oops.className = strelement + i;
//     oops.className = strelement2 + i;
//     document.body.appendChild(oops);
// }


// oops.innerHTML="oops il semblerait que vous ayez été déconecté!"
// document.getElementById("oopsCoId").appendChild(attenduCo);








