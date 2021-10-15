import { Morpion } from "./MorpionClass";

export class MorpionSimple extends Morpion{

    


























    aGagne3ParmiN (symbole, y, x) {
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
}