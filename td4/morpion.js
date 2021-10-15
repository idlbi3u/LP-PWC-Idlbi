import { Morpion } from "./MorpionClass.js";

let morpion;
let scores = [0,0];
let table;
let taille;
let modeJeu;
let zoneMessage;
let NewMorpion;

const btnReset = document.getElementById('btn_reset');
btnReset.addEventListener('click', rejouer);



function rejouer(){
  //recupération des balises
  zoneMessage = document.getElementById('messages');
  taille = Number.parseInt(document.getElementById('taille').value);
  modeJeu = document.getElementById('simple').checked ? 'simple' : 'complet';
  table = document.getElementById('table_morpion');
  document.getElementById('score').innerHTML = 'X : ' + scores[0] + ' - O  : ' + scores[1];
  table.innerHTML = '';


  // Creation Grille
  try{
    NewMorpion = new Morpion(taille, modeJeu);
    morpion = NewMorpion.CreerGrille();
    zoneMessage.innerHTML = "Joueur "+ NewMorpion.getJoueur()+', à toi !';

    //Affichage Grille
    for (let i = 0; i < morpion.length; i++) {
      const ligne = table.insertRow(i);
      for (let j = 0; j < morpion.length; j++) {
        const id = '' + ((i + 1) * 10 + (j + 1));
        const cell = ligne.insertCell(j);
        cell.innerHTML = "<input type='button' class='case' id='" + id + "'/>";
        cell.firstChild.addEventListener("click", () => clicBouton(cell.firstChild, i, j));
        document.getElementById(id).value = '';
      }
    }  

    console.log(morpion);

  }catch(e){
    
    zoneMessage.innerText = e.message;

  }
}

function clicBouton(uneCase, y, x) {
  // Clique button 
  try{
    let etat = NewMorpion.clicBouton(y, x);
    uneCase.classList.add(NewMorpion.getClass());
    uneCase.value = NewMorpion.getSymbole(y, x);
    zoneMessage.innerHTML = 'Joueur ' + NewMorpion.getJoueur() + ', à toi de jouer !';
    
    // tests si le match est fini
    if(etat === true){
      desactiveEcouteurs();
      zoneMessage.innerHTML = 'Le joueur ' + NewMorpion.getGagnant() + ' a gagné !';
      scores[0] += NewMorpion.getScore()[0];
      scores[1] += NewMorpion.getScore()[1];
      document.getElementById('score').innerHTML = 'X : ' + scores[0] + ' - O  : ' + scores[1];
    }
    if(etat === false){
      desactiveEcouteurs();
      zoneMessage.innerHTML = 'Match Nul !';
    }
  }catch(e){
    zoneMessage.innerHTML = e.message;
  }

}

function desactiveEcouteurs () {
  for (let i = 0; i < morpion.length; i++) {
    for (let j = 0; j < morpion.length; j++) {
      console.log(document.getElementById('' + ((i + 1) * 10 + (j + 1))));
      document.getElementById('' + ((i + 1) * 10 + (j + 1))).disabled = true;
    }
  }
  document.getElementById('btn_reset').disabled = false;
}




rejouer();