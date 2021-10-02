let NomDesJoueurs = '<label for="joueur1">Nom du joueur 1</label>'+
                    '<input type="text" id="joueur1" name="joueur1">'+
                    '<label for="joueur2">Nom du joueur 2</label>'+
                    '<input type="text" id="joueur2" name="joueur2">'+
                    '<button onclick="ValiderNoms()">Valider</button>';

var DivPres = document.getElementById("ZonePres");
DivPres.innerHTML = NomDesJoueurs;
console.log(DivPres);

function ValiderNoms(){

    let joueur1 = document.getElementById("joueur1").value;
    let joueur2 = document.getElementById("joueur2").value;

    let PresNom = '<p> Joueur 1 X: '+joueur1+'</p>'+'<p> Joueur 2 O: '+joueur2+'</p>';

    DivPres.innerHTML = PresNom;

    let PresChoixJeu = '<h2>Choisissez le type de jeu</h2><button id="Type3" onclick="CreerTable(this.id)">3 x 3</button><button id="Type8" onclick="CreerTable(this.id)">8 x 8</button>';

    DivPres.innerHTML += PresChoixJeu;
    console.log(joueur1, joueur2);
}

function CreerTable(type){
    return console.log(type);
}


