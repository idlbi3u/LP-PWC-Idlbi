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

function getPosition(array, Element) {
    for (let i = 0; i < array.length; i++) {
        if(Element == array[i]){
            return i;
        }
    }
}

function ProduireResultat() {
    let ListeInputs = document.getElementsByName('inputs')
    console.log(ListeInputs);

    let TableValeur = [];

    for (let index = 0; index < ListeInputs.length; index++) {
        console.log(ListeInputs[index].value);
        TableValeur.push(parseInt(ListeInputs[index].value));
    }

    console.log('Table de valeur ',TableValeur);
    let ValeurRecherche = getValeurRecherche();

    let SommeTable = Outil.getSum41(TableValeur);
    console.log('La somme : ',SommeTable);
    document.getElementById('somme').innerText += SommeTable;

    let NombreDePair = Outil.getNumberOfEven42(TableValeur);
    console.log('Le nombre de pair :', NombreDePair);
    document.getElementById('nbrPair').innerText += NombreDePair;

    let PlusGrandElementPair = Outil.getMaxEven45(...TableValeur);
    console.log('Le plus grand nombre pair : ', PlusGrandElementPair);
    document.getElementById('PlusGrand').innerText += PlusGrandElementPair;

    let Position = getPosition(TableValeur, ValeurRecherche);
    console.log('Position de la valeur recherchee : ', Position,'La valeur recherchee : ',ValeurRecherche);
    document.getElementById('pos').innerText += Position;
}


function init() {
    document.getElementById('AjoutElement').addEventListener('click', () => AjouterElement());
    document.getElementById('ProduireRes').addEventListener('click', () => ProduireResultat());
    document.getElementById('recherche').addEventListener('change', () => getValeurRecherche());
}


init();


