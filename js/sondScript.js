// var testX = document.createElement('div');
// testX.id="wsh"
// document.body.firstChild(testX);
// document.getElementsByTagName("main").appendChild(testX);

sondage1 = {
    question: "Pamis les personnages principaux de la série qui n'ont pas encore de version Brave lequel gagnera la prochaine fois?",
    response: ["Alfonse", "Marth", "Seliph", "Leif", "Chrom", "Corrin", "Byleth"]
}
sondage2 = {
    question: "Selon vous, quel est le meilleur livre de FEH?",
    response: ["Livre 1", "Livre 2", "Livre 3", "Livre 4"]
}

var isSond = 0;
var choix1 = ""
var choix2 = ""

function creaSond1(sondas) {
    isSond = 1;
    var questSond1 = document.createElement('h3');
    questSond1.innerHTML = sondage1.question
    questSond1.id = "quest"

    var questRep = document.createElement('div');
    questRep.id = "sond1"
    var ulRep = document.createElement('ul');
    ulRep.id = "ulRep";




    document.getElementById("mains").insertBefore(questSond1, entreBr);
    document.getElementById("mains").insertBefore(questRep, entreBr);
    document.getElementById("sond1").appendChild(ulRep);

    for (let i = 0; i < sondas.response.length; i++) {
        var strI = (i + 1).toString()

        var listRep = document.createElement('li');
        listRep.id = "listRep" + strI

        var repon = document.createElement('div');
        repon.id = "repon" + strI

        var buttRep = document.createElement('button');
        buttRep.type = "submit"
        buttRep.id = "buttRep" + strI
        buttRep.className = "buttRepB";

        var fondRep = document.createElement('div');
        fondRep.id = "fondRep0" + strI
        fondRep.className = "fondRep1" + strI + " fondRep0"

        var miniRep = document.createElement('div');
        miniRep.id = "miniRep0" + strI
        miniRep.className = "miniRep1" + strI + " miniRep0"

        repRep = document.createElement('p');
        repRep.className = "repP";

        // document.getElementById("formCoId").appendChild(contenuCo);
        document.getElementById("ulRep").appendChild(listRep);
        document.getElementById("listRep" + strI).appendChild(repon);
        document.getElementById("repon" + strI).appendChild(buttRep);
        document.getElementById("buttRep" + strI).appendChild(fondRep);
        document.getElementById("fondRep0" + strI).appendChild(miniRep);
        document.getElementById("miniRep0" + strI).appendChild(repRep);
        repRep.innerHTML = sondas.response[i]

    }
    $(".buttRepB").click(function () {

        if (isSond == 1) {

            console.log($(this).text());
            choix1 = $(this).text();
            document.getElementById("quest").innerHTML = "";
            document.getElementById("sond1").innerHTML = "";
            creaSond2(sondage2)

        }



    });
}


function creaSond2(sondas) {

    isSond = 2;
    var questSond2 = document.createElement('h3');
    questSond2.innerHTML = sondage2.question
    questSond2.id = "quest2"

    var questRep = document.createElement('div');
    questRep.id = "sond2"
    var ulRep = document.createElement('ul');
    ulRep.id = "ulRep";



    document.getElementById("mains").insertBefore(questSond2, entreBr);
    document.getElementById("mains").insertBefore(questRep, entreBr);
    document.getElementById("sond2").appendChild(ulRep);

    for (let i = 0; i < sondas.response.length; i++) {
        var strI = (i + 1).toString()

        var listRep = document.createElement('li');
        listRep.id = "listRep" + strI

        var repon = document.createElement('div');
        repon.id = "repon" + strI

        var buttRep = document.createElement('button');
        buttRep.type = "submit"
        buttRep.id = "buttRep" + strI
        buttRep.className = "buttRepB2";

        var fondRep = document.createElement('div');
        fondRep.id = "fondRep0" + strI
        fondRep.className = "fondRep2" + strI + " fondRep0"

        var miniRep = document.createElement('div');
        miniRep.id = "miniRep0" + strI
        miniRep.className = "miniRep2" + strI + " miniRep0"

        repRep = document.createElement('p');
        repRep.className = "repP";

        // document.getElementById("formCoId").appendChild(contenuCo);
        document.getElementById("ulRep").appendChild(listRep);
        document.getElementById("listRep" + strI).appendChild(repon);
        document.getElementById("repon" + strI).appendChild(buttRep);
        document.getElementById("buttRep" + strI).appendChild(fondRep);
        document.getElementById("fondRep0" + strI).appendChild(miniRep);
        document.getElementById("miniRep0" + strI).appendChild(repRep);
        repRep.innerHTML = sondas.response[i]

    }

    $(".buttRepB2").click(function () {

        if (isSond == 2) {

            console.log($(this).text());
            choix2 = $(this).text();
            document.getElementById("quest2").innerHTML = "";
            document.getElementById("sond2").innerHTML = "";
            resultSon()
        }



    });

}


// creaSond1(sondage1)
$.ajax({
    url: "sondage2.php",
    // async:false

}).done(function (response) {
    creaSond1(sondage1)
}).fail(function (response) {
    console.log(response)
})




function resultSon() {
    if (choix1 == "Marth" || choix2 == "Livre 2") {
        if (choix1 == "Marth" && choix2 == "Livre 2") {
            var resSon = document.createElement('h2');
            resSon.innerHTML = "Toutes vos réponces sont bonnes, vous gagnez 10 points!"
            document.getElementById("mains").insertBefore(resSon, entreBr);

        }
        else {
            var resSon = document.createElement('h2');
            resSon.innerHTML = "Une seule de vos réponces est bonne, vous gagnez 5 points!"
            document.getElementById("mains").insertBefore(resSon, entreBr);
        }
    }
    else {
        var resSon = document.createElement('h2');
        resSon.innerHTML = "Aucunes de vos réponces ne sont bonnes les bonne, vous gagnez rien..."
        document.getElementById("mains").insertBefore(resSon, entreBr);
    }

}

















