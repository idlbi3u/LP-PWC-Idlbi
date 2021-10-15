import { Morpion } from "./MorpionClass.js";

let morpion;
//let nbCoups;
//let joueur;
//let symbole;
let scores = [0, 0];
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
  table.innerHTML = '';


  // Creation Grille
  try{
    NewMorpion = new Morpion(taille, modeJeu);
    morpion = NewMorpion.CreerGrille();
    zoneMessage.innerHTML = "Joueur "+ NewMorpion.getJoueur()+', à toi !';

    console.log(morpion);
  }catch(e){
    zoneMessage.innerText = e.message;
  }

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
}

function clicBouton(uneCase, y, x) {
  // Clique button 

  try{
    uneCase.value = NewMorpion.getSymbole();
    uneCase.classList.add('joueur' + NewMorpion.getJoueur());

    document.getElementById('score').innerHTML = 'X : ' + scores[0] + ' - O  : ' + scores[1];

    let etat = NewMorpion.clicBouton(uneCase, y, x);
    zoneMessage.innerHTML = 'Joueur ' + NewMorpion.getJoueur() + ', à toi de jouer !';
    

    // tests si le match est fini
    console.log(etat);
    if(etat == true){
      desactiveEcouteurs();
      zoneMessage.innerHTML = 'Le joueur ' + NewMorpion.getJoueur() + ' a gagné !';
    }
    if(etat == false){
      desactiveEcouteurs();
      zoneMessage.innerHTML = 'Match Nul !';
    }
    
    console.log('Tour du joueur '+NewMorpion.getJoueur());

  }catch(e){
    console.log(e);
    zoneMessage.innerHTML = e.message;
  }

}

function desactiveEcouteurs () {
  for (let i = 0; i < morpion.length; i++) {
    for (let j = 0; j < morpion.length; j++) {
      console.log(document.getElementById('' + ((i + 1) * 10 + (j + 1))));
      document.getElementById('' + ((i + 1) * 10 + (j + 1))).firstChild.removeAttribute('onclick');
    }
  }
  document.getElementById('btn_reset').disabled = false;
}


function aGagne3ParmiN (symbole, y, x) {
  const aTrouver = symbole.repeat(3);

  // gagné en ligne ? : concaténation de la ligne, et recherche de la sous-chaîne gagnante
  let ligne = '';
  morpion[y].forEach(element => (ligne += element));
  if (ligne.indexOf(aTrouver) >= 0) {
    return true;
  }

  // gagné en colonne ? : concaténation de la colonne et recherche de la sous-chaîne gagnante
  let col = '';
  morpion.forEach(element => (col += element[x]));
  if (col.indexOf(aTrouver) >= 0) {
    return true;
  }

  // gagné diagonale
  if (x === y) {
    let diagonale = '';
    for (let lc = 0; lc < taille; lc++) {
      diagonale += morpion[lc][lc];
    }
    if (diagonale.indexOf(aTrouver) >= 0) {
      return true;
    }
  }

  // gagné diag inverse
  if (x === taille - (y + 1)) {
    let inverse = '';
    for (let lc = 0; lc < taille; lc++) {
      inverse += morpion[lc][taille - (lc + 1)];
    }
    if (inverse.indexOf(aTrouver) >= 0) {
      return true;
    }
  }

  return false;
}

document.getElementById('score').innerHTML = 'X : ' + scores[0] + ' - O  : ' + scores[1];

rejouer();