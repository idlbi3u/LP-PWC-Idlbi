let NomDesJoueurs = '<div class="form-group"><label for="joueur1" class="label">Nom du joueur 1 </label>'+
                    '<input type="text" id="joueur1" name="joueur1" class="form-control"></div>'+
                    '<div class="form-group"><label for="joueur2" class="label">Nom du joueur 2 </label>'+
                    '<input type="text" id="joueur2" name="joueur2" class="form-control"><div>'+
                    '<div class="form-group"><button onclick="ValiderNoms()" class="btn btn-success">Valider</button></div>';

var DivPres = document.getElementById("ZonePres");
DivPres.innerHTML = NomDesJoueurs;
console.log(DivPres);

function ValiderNoms(){

    let joueur1 = document.getElementById("joueur1").value;
    let joueur2 = document.getElementById("joueur2").value;


    if(joueur1 === "" || joueur2 === "" && joueur1.match(/^ *$/) !== null || joueur2.match(/^ *$/) !== null){
        alert('Veuillez entrez les noms des joueurs et valider !');
    }else{
        var PresNom = '<p> Joueur 1 X: '+joueur1+'</p>'+'<p> Joueur 2 O: '+joueur2+'</p>';

        DivPres.innerHTML= PresNom;
        let PresChoixJeu = '<div id="choix" class="form-group"><h2>Choisissez le type de jeu</h2><input type="number" id="taille" class="form-control"><button onclick="Taille()" class="btn btn-success">Valider</button></div>';

         DivPres.innerHTML += PresChoixJeu;
    }

    let Taille = document.getElementById("taille").value;
    console.log(Taille);

    return joueur1, joueur2;
}

function CreateTable(n){
    for(let i = 1; i <= n; i++){
        let colone = '<'

    }
}

function Taille(){
    let Taille = document.getElementById("taille").value;
    console.log(Taille);

    if(3 <= Taille && Taille <= 8){
        let Delete = document.getElementById('choix');
        DivPres.removeChild(Delete);
    }else{
        alert("Il faut entrer une valeur entre 3 et 8");
    }
    
    
}

function jouer(){

}


