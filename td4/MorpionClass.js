export class Morpion{

    MAX_GRILLE = 8;
    MIN_GRILLE = 3;
    grille = new Array(this.taille);
    symbole ='x';
    joueur = 1;
    nbCoups = 0;
    score = [0,0];


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
    getScore(){
      return this.score;
    }
    setSymbole(NewSymbole){
      this.symbole = NewSymbole;
    }
    setJoueur(NewJoueur){
      this.joueur = NewJoueur;
    }
    setScore(NewScore){
      this.score[0] = NewScore[0];
      this.score[1] = NewScore[1];
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
          throw new Error ('Erreur lors de la création de la grille!');
      }
      return this.grille;
    }


    aGagne (y, x) {
        let nbSymboles;
        let etat = false;
      
        // gagné en ligne ?
        const ligne = y;
        nbSymboles = 0;
        for (let col = 0; col < this.taille; col++) {
          if (this.grille[ligne][col] === this.symbole) {
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
          if (this.grille[ligne][col] === this.symbole) {
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
            if (this.grille[lc][lc] === this.symbole) {
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
            if (this.grille[ligne][this.taille - (ligne + 1)] === this.symbole) {
                nbSymboles++;
            }
            }
            if (nbSymboles === this.taille) {
            return true;
            }
        }  
    }

    clicBouton (uneCase, y, x) {
      if (this.grille[y][x] === ' '){

        this.grille[y][x] = this.symbole;
        console.log(this.grille);
        //uneCase.value = symbole;
        //uneCase.classList.add('joueur' + joueur);
        this.nbCoups++;

        try{
          this.aGagne(y, x);
        }catch(e){
          throw new Error (e.message);
        }
    
        const victoire = this.aGagne(y, x);
        if (victoire) {
          //zoneMessage.innerHTML = 'Le joueur ' + this.joueur + ' a gagné !';
          //desactiveEcouteurs();
          this.symbole === 'x' ? this.setScore++ : this.scores[1]++;
          
         // document.getElementById('score').innerHTML = 'X : ' + scores[0] + ' - O  : ' + scores[1];
        } else if (this.nbCoups === this.taille * this.taille) {
          
          //zoneMessage.innerHTML = 'Match nul !';
          //desactiveEcouteurs();
        }else {
          if (this.symbole === 'x') {
            this.setSymbole('o');
            this.setJoueur(2);
          } else {
            this.setSymbole('x');
            this.setJoueur(1);
          }
          //zoneMessage.innerHTML = 'Joueur ' + joueur + ', à toi de jouer !';
        }
      } else {
        throw new Error ('Case déjà occupée !');
      }
    }
}