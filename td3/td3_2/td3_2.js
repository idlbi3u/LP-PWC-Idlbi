import * as Outil from './functions.js';

function AjouterElement() {
    let ListElements = document.getElementById('listeElements');
    let NextElementNumber = ListElements.childElementCount +1;

    let NewInput = '<li style="margin-top: 20px;"><label for="element'+NextElementNumber+'" id="label'+NextElementNumber+'">Element '+NextElementNumber+' </label><input type="number" name="inputs"></li>'
    
    ListElements.innerHTML += NewInput;
}

function getValeurRecherche() {
    let ValeurRecherchee = document.getElementById('recherche').value;
    console.log('Valeur recherche :',ValeurRecherchee);

    return ValeurRecherchee;
}



function ProduireResultat() {
    /*------------------------------------------------------- */
    //initialisation des resultats
    let ListeResultat = document.getElementsByName('resultat');
    console.log('Liste resultat',ListeResultat);
    for (let i = 0; i < ListeResultat.length; i++) {
        ListeResultat[i].innerText =null;
    }


    //Recupère les valeurs rentrées 
    let ListeInputs = document.getElementsByName('inputs')
    console.log(ListeInputs);
    let TableValeur = [];
    for (let index = 0; index < ListeInputs.length; index++) {
        if(ListeInputs[index].value != ""){
            console.log('rentre dans le test');
            TableValeur.push(parseInt(ListeInputs[index].value));
        }
    }
    console.log('Table de valeur ',TableValeur);


    if(TableValeur.length != 0){

        /*------------------------------------------------------- */
        //La somme
        let SommeTable = Outil.getSum41(TableValeur);
        console.log('La somme : ',SommeTable);
        console.log('first child :',document.getElementById('somme').children);
        document.getElementById('somme').innerText += SommeTable;

        /*------------------------------------------------------- */
        //Combien de nombre pair dans la table
        let NombreDePair = Outil.getNumberOfEven42(TableValeur);
        console.log('Le nombre de pair :', NombreDePair);
            document.getElementById('nbrPair').innerText += NombreDePair;
        
        /*------------------------------------------------------- */
        //Le plus grand nombre pair 

        if(Outil.getNumberOfEven42(TableValeur) != 0){
            let PlusGrandElementPair = Outil.getMaxEven45(...TableValeur);
            console.log('Le plus grand nombre pair : ', PlusGrandElementPair);
            document.getElementById('PlusGrand').innerText += PlusGrandElementPair;

        }else{
            let PlusGrandElementPair ='Pas de nombre pair';
            document.getElementById('PlusGrand').innerText += PlusGrandElementPair;
        }
       
        

        /*------------------------------------------------------- */
        //Position de la valeur cherché

        let ValeurRecherche = getValeurRecherche();
        let Position = Outil.getPosition(TableValeur, ValeurRecherche);
        console.log('Position de la valeur recherchee : ', Position,'La valeur recherchee : ',ValeurRecherche);
        document.getElementById('pos').innerText += Position;

    }else{
        alert('Veuillez entrer au moins une valeur !');
    }
    
}


function init() {
    document.getElementById('AjoutElement').addEventListener('click', () => AjouterElement());
    document.getElementById('ProduireRes').addEventListener('click', () => ProduireResultat());
    document.getElementById('recherche').addEventListener('change', () => getValeurRecherche());
}


init();




