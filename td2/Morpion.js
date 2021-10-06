//Initialisation de la page!!!

let NomDesJoueurs = '<div class="form-group"><label for="joueur1" class="label">Nom du joueur 1 </label>'+
                    '<input type="text" id="joueur1" name="joueur1" class="form-control"></div>'+
                    '<div class="form-group"><label for="joueur2" class="label">Nom du joueur 2 </label>'+
                    '<input type="text" id="joueur2" name="joueur2" class="form-control"><div>'+
                    '<div class="form-group"><button onclick="ValiderNoms()" class="btn btn-success">Valider</button></div>';

var DivPres = document.getElementById("ZonePres");
var TourJoueur = 'joueur1';
var GameTable = [];
DivPres.innerHTML = NomDesJoueurs;
console.log(DivPres);   


//FONCTIONS

function ValiderNoms(){

    let joueur1 = document.getElementById("joueur1").value;
    let joueur2 = document.getElementById("joueur2").value;


    if(joueur1 === "" || joueur2 === "" && joueur1.match(/^ *$/) !== null || joueur2.match(/^ *$/) !== null){
        alert('Veuillez entrez les noms des joueurs et valider !');
    }else{
        var PresNom = '<p> Joueur 1 O : '+joueur1+'</p>'+'<p> Joueur 2 X : '+joueur2+'</p>';

        DivPres.innerHTML= PresNom;
        let PresChoixJeu = '<div id="choix" class="form-group"><h2>Choisissez le type de jeu</h2><input type="number" id="taille" class="form-control"><button onclick="Taille()" class="btn btn-success">Valider</button></div>';

         DivPres.innerHTML += PresChoixJeu;
         let Taille = document.getElementById("taille").value;
         console.log(Taille);
    }

}


function Taille(){
    let Taille = document.getElementById("taille").value;
    console.log(Taille);

    if(3 <= Taille && Taille <= 8){
        let Delete = document.getElementById('choix');
        DivPres.removeChild(Delete);
        CreateTable(Taille);
        CollecteValeur(Taille);

    }else{
        alert("Il faut entrer une valeur entre 3 et 8");
    }
}



function CreateTable(n){
    DivJeu = document.getElementById('TableJeu');
    
    for(let i = 1; i <= n; i++){
        let ligne = '<tr id="ligne'+i+'"></tr>'
        DivJeu.innerHTML += ligne;
        for (let j = 1; j <= n; j++) {
            let line = document.getElementById('ligne'+i);
            let cellule = '<td id="ligne'+i+'cellule'+j+'" onclick="Coordonnee(['+i+','+ j+'])" style="width: 50px; height: 50px;"></td>';
            line.innerHTML += cellule;
            
        }

    }
    console.log(DivJeu);
}


function CollecteValeur(n){
    for (let i = 1; i <= n; i++) {
       for (let j = 1; j <= n; j++) {
           GameTable[''+i+','+j+''] = '';
       }
    }
}

function VerifierDiagonale(){
    let j=0;
    for (let i = 0; i < 9; i++) {
        j = j+i;
        console.log(GameTable['['+i+','+j+']']);
        
    }
}


function Coordonnee(TabCoor){

    let cellule = document.getElementById('ligne'+TabCoor[0]+'cellule'+TabCoor[1]);

    if(TourJoueur === 'joueur2' && cellule.innerText ==''){
        TourJoueur = 'joueur1';
        cellule.innerText = 'X';
        

    }
    
    if(TourJoueur === 'joueur1' && cellule.innerText ==''){
        TourJoueur = 'joueur2';
        cellule.innerText = 'O';
        
    }
    
    console.log('Coordonnées Cellule cliquée : ',TabCoor);
    
    GameTable[''+TabCoor[0]+','+TabCoor[1]+''] = cellule.innerText;
    console.log(GameTable);


    VerifierDiagonale();
}

