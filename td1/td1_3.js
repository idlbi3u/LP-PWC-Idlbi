console.log('Exercice 3');

function estMajuscule(){
    let Phrase;
    do{
       Phrase = prompt('Entrer une phrase en majuscule : ');
    }while(Phrase !== Phrase.toUpperCase());
}
//estMajuscule();



function genererChaine(){
    let Phrase='';
    for(i=0; i<5; i++){
        Phrase += String.fromCharCode(65 + Math.random()*(123-65));
    }
    return Phrase;
}

function chaineAleatoire(){
    let NombreDeFois = 0;
    let Phrase;
    const specialCarac =  /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g;
    do
    {
        Phrase = genererChaine();
        NombreDeFois = NombreDeFois + 1;
        console.log("Phrase = n°",NombreDeFois,':',Phrase);

    }while(specialCarac.test(Phrase) === true ||Phrase !== Phrase.toUpperCase());

    alert('Après '+NombreDeFois+' essaies nous avons la phrase '+Phrase);
}

//chaineAleatoire();


function chaineAleatoireVoyelles(){
    const voyelles = ['e','a','i','h','o','u','E','A','I','H','O','U'];
    let Phrase='';

    for(i=0; i<5; i++){

        Phrase += voyelles[parseInt(Math.random() * (11 - 0) + 0)];
    }
    return alert('Phrase ne contenant que des voyelles : '+Phrase);
}
//chaineAleatoireVoyelles();



function EntrerNomPrenom(){
    let nom = prompt('Entrer votre nom : ');
    let prenom = prompt('Entrer votre prenom : ');

    nom = nom.toUpperCase();
    ChainePrenom = prenom.split(" ");

    for (var i = 0; i < ChainePrenom.length; i++) {
        ChainePrenom[i] = ChainePrenom[i].charAt(0).toUpperCase() + ChainePrenom[i].slice(1);
    }
    prenom = ChainePrenom.join(" ");

    return alert('Vous vous appelez '+prenom+' '+nom);
}

//EntrerNomPrenom();


function Encrypter(){
    let mot = prompt("Entrer la phrase à encrypter : ");
    let tabEncrypter = {"A":4,"E":3,"G":6, "I":1, "O":0, "S":5, "Z":2};
    let Tabmot = mot.split("");

    for (let index = 1; index < Tabmot.length; index++) {
        if( tabEncrypter[Tabmot[index].toUpperCase()] != null){
            Tabmot[index] =tabEncrypter[Tabmot[index].toUpperCase()];
        }
        console.log(Tabmot);
    }

    mot = Tabmot.join("");
    return alert('Le mot de passe encrypté est '+mot);
}

//Encrypter();

function JazzBundle(){
    var n = prompt("Entrer le nombre d'entiers : ");
    
    for(let i=1; i <= n; i++){
        if (i % 3 == 0){
            console.log('Jazz');
        }if(i % 5 == 0){
            console.log('Bundle');
        }if(i % 3 == 0 && i % 5 == 0){
            console.log('Le nombre : '+i);
        }
    }
}

//JazzBundle();
