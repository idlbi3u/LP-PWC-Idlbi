import { Morpion } from "./MorpionClass.js";

export class MorpionSimple extends Morpion{

  symbole ='x';
  joueur = 1;

  constructor(taille, modeJeu) {
    super(taille, modeJeu);

    
    if(!this.modeJeu === 'simple'){
      throw new Error ('erreur de mode');
    }
  }

  setSymbole(NewSymbole){
    this.symbole = NewSymbole;
  }
  setJoueur(NewJoueur){
    this.joueur = NewJoueur;
  }

  getSymbole(x, y){
    return this.grille[x][y];
  }
  getJoueur(){
    return this.joueur;
  }



  clicBoutonSimple(y, x) {
    if (this.grille[y][x] === ' '){
      console.log(this.symbole);

      this.grille[y][x] = this.symbole;
      console.log('Grille : ',this.grille);
      this.nbCoups++;

      this.setClass('joueur'+this.joueur);

      const victoire = this.aGagne3ParmiN(y, x);
      if (victoire) {
        this.setGagnant(this.joueur);

        if(this.gagnant === 1){
          this.score[0] +=1;
        }else{
          this.score[1] +=1;
        }
        return true;

      } else if (this.nbCoups === this.taille * this.taille) {
        return false;

      }else {
        if (this.symbole === 'x') {
          this.setSymbole('o');
          this.setJoueur(2);

        } else{
          this.setSymbole('x');
          this.setJoueur(1);

        }
      }
    } else {

      throw new Error ('Case déjà occupée !');

    }
  }
  
  aGagne3ParmiN (y, x) {
    const aTrouver = this.symbole.repeat(3);
      
    // gagné en ligne ? : concaténation de la ligne, et recherche de la sous-chaîne gagnante
    let ligne = '';
    this.grille[y].forEach(element => (ligne += element));
    if (ligne.indexOf(aTrouver) >= 0) {
      return true;
    }
      
    // gagné en colonne ? : concaténation de la colonne et recherche de la sous-chaîne gagnante
    let col = '';
    this.grille.forEach(element => (col += element[x]));
    if (col.indexOf(aTrouver) >= 0) {
      return true;
    }
      
    // gagné diagonale
    if (x === y) {
      let diagonale = '';
      for (let lc = 0; lc < taille; lc++) {
          diagonale += this.grille[lc][lc];
          }
        if (diagonale.indexOf(aTrouver) >= 0) {
          return true;
        }
      }
      
    // gagné diag inverse
    if (x === taille - (y + 1)) {
       let inverse = '';
        for (let lc = 0; lc < taille; lc++) {
          inverse += gr[lc][taille - (lc + 1)];
        }
        if (inverse.indexOf(aTrouver) >= 0) {
          return true;
        }
      }
      
    return false;
  }
}