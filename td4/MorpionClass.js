export class Morpion{

    MAX_GRILLE = 8;
    MIN_GRILLE = 3;
    grille = new Array(this.taille);
    symbole ='';
    joueur = 1;


    getMaxGrille(){
      return this.MAX_GRILLE;
    }

    getMinGrille(){
      return this.MIN_GRILLE;
    }
    getSymbole(){
      return this.symbole;
    }
    getJoueur(){
      return this.joueur;
    }
    setSymbole(NewSymbole){
      this.symbole = NewSymbole;
    }
    setJoueur(NewJoueur){
      this.joueur = NewJoueur;
    }
    

    constructor(taille, modeJeu){
        if (Number.isNaN(taille) || taille < this.MIN_GRILLE || taille > this.MAX_GRILLE){
            throw new Error ('Taille invalide !');
           }else{
            this.taille = taille;
            this.modeJeu = modeJeu;
        }
    }

    toString(){
        return 'Un morpion de taille ' + this.taille + ' en mode ' + this.modeJeu;
    }


    getTaille(){
        return this.taille;
    }

    getmodeJeu(){
        return this.modeJeu;
    }

    setTaille(t){
        this.taille = t;
    }

    setmodeJeu(mode){
        this.modeJeu = mode;
    }

    
    CreerGrille(){
      for (let i = 0; i < this.taille; i++) {
        this.grille[i] = new Array(this.taille);
        for (let j = 0; j < this.taille; j++) {
          this.grille[i][j] = ' ';
        }
      }

      if(this.grille.length == 0){
          throw new Error ('Erreur leur de la création de la grille!');
      }
      return this.grille;
    }


    aGagne (y, x) {
        let nbSymboles;
      
        // gagné en ligne ?
        const ligne = y;
        nbSymboles = 0;
        for (let col = 0; col < this.taille; col++) {
          if (this.morpion[ligne][col] === this.symbole) {
            nbSymboles++;
          }
        }
        if (nbSymboles === this.taille) {
          return true;
        }
      
        // gagné en colonne ?
        const col = x;
        nbSymboles = 0;
        for (let ligne = 0; ligne < this.taille; ligne++) {
          if (this.morpion[ligne][col] === this.symbole) {
            nbSymboles++;
          }
        }
        if (nbSymboles === this.taille) {
          return true;
        }
      
        // gagné diagonale
        if (x === y) {
          nbSymboles = 0;
          for (let lc = 0; lc < this.taille; lc++) {
            if (this.morpion[lc][lc] === this.symbole) {
              nbSymboles++;
            }
          }
          if (nbSymboles === this.taille) {
            return true;
          }
        }

        // gagné diag inverse
        if (x === this.taille - (y + 1)) {
            nbSymboles = 0;
            for (let ligne = 0; ligne < this.taille; ligne++) {
            if (this.morpion[ligne][this.taille - (ligne + 1)] === this.symbole) {
                nbSymboles++;
            }
            }
            if (nbSymboles === this.taille) {
            return true;
            }
        }  
        throw new Error ('Vérification échouée!');
    }

    clicBouton (uneCase, y, x) {
      if (this.grille[y][x] === ' '){

        this.grille[y][x] = this.symbole;
        //uneCase.value = symbole;
        //uneCase.classList.add('joueur' + joueur);
        nbCoups++;
    
        const victoire = this.aGagne(this.symbole, y, x);
        if (victoire) {
          //zoneMessage.innerHTML = 'Le joueur ' + this.joueur + ' a gagné !';
          //desactiveEcouteurs();
          this.symbole === 'x' ? scores[0]++ : scores[1]++;
         // document.getElementById('score').innerHTML = 'X : ' + scores[0] + ' - O  : ' + scores[1];
        } else if (nbCoups === this.taille * this.taille) {
          //zoneMessage.innerHTML = 'Match nul !';
          //desactiveEcouteurs();
        } else {
          if (this.symbole === 'x') {
            this.symbole = 'o';
            this.joueur = 2;
          } else {
            this.symbole = 'x';
            this.joueur = 1;
          }
          //zoneMessage.innerHTML = 'Joueur ' + joueur + ', à toi de jouer !';
        }
      } else {
        //zoneMessage.innerHTML = 'Case déjà occupée !!! ';
      }
    }
}