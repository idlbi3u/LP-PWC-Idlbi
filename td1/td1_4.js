function AdditionEntier(TableauDeValeur){
let somme=0;
    for(var i=0; i<TableauDeValeur.length; i++){
        somme += TableauDeValeur[i];
    }
    return alert('La somme est egale a '+somme);
}

//AdditionEntier([1,2,3,4,5,6]);

function NombresPair(TableauDeValeur){
    let nbr =0; 
    for(var i=0; i<TableauDeValeur.length; i++){
        if(TableauDeValeur[i] % 2 == 0 ){
            nbr = nbr + 1;
        }
    }
    return alert('Il y a '+nbr+' nombres paires!');
}
//NombresPair([1,2,3,4,5,6]);

function TableauTrier1(Tab1 , Tab2){ //sans utiliser SORT()
    let tableau = Tab1.concat(Tab2);
    let newTable=[];
    console.log(tableau);
    for(var i=0; i<tableau.length; i++){
        for(var j=i+1; j<tableau.length; j++){
            if(tableau[i] < tableau[i+1]){
                if( tableau[j], tableau[i]){
                    
                 }
            }
        }
    }
    return console.log(tableau);
}

//TableauTrier1([0,2,5,8], [2,4,3,6,44]);

function RechercheDichtomique(tab){

}

function PlusGrandNombrePair(listeEntier){
    var plusGrandNombrePair = 0;
    for (let index = 0; index < listeEntier.length; index++) {
        if(listeEntier[index]%2 == 0 && listeEntier[index] > plusGrandNombrePair){
            plusGrandNombrePair = listeEntier[index];
        }
    }
    return console.log('le plus grand nombre pair de cette liste est : ', plusGrandNombrePair)
}
//PlusGrandNombrePair([1,2,3,2,10,5,44,66,32,12,11,55,8,77,9,145,144]);

function OccurencesMot(phrase){
    phrase = phrase.toLowerCase();
    console.log("La phrase est : ",phrase);
    var TabPhrase = phrase.split(" ");
    console.log(TabPhrase);

    let TableOccurences = [];
    for (let i= 0; i < TabPhrase.length; i++) {
        TableOccurences[TabPhrase[i]] = 0;
    }
    for (let j = 0; j < TabPhrase.length; j++) {
        TableOccurences[TabPhrase[j]] = TableOccurences[TabPhrase[j]] +1;
    }
    console.log(TableOccurences);

}

OccurencesMot("Hello hello hello no no yes yes yes nah");