import recette from '../../data/recipes.json';

export default function Recettes() {
  return {
    imagesBase: [],
    recettesFiltrees: [],
    difficulteSelectionnee: null,
    modaleOuverte: false,
    recetteActuelle: null,
    etapeActuelle: 0,

    init() {
      if (Array.isArray(recette.recipes)) {
        this.imagesBase = recette.recipes.map((recette, index) => ({
          ...recette,
          id: index,
        }));
        this.recettesFiltrees = this.imagesBase;
      }
    },

    definirDifficulte(difficulte) {
      if (this.difficulteSelectionnee === difficulte) {
        this.difficulteSelectionnee = null;
        this.recettesFiltrees = this.imagesBase;
      } else {
        this.difficulteSelectionnee = difficulte;
        this.recettesFiltrees = this.imagesBase.filter(
          (recette) => recette.difficulty.toLowerCase() === difficulte
        );
      }
    },

    ouvrirModale(recette) {
      this.recetteActuelle = recette;
      this.modaleOuverte = true;
      this.etapeActuelle = 0;
    },

    fermerModale() {
      this.modaleOuverte = false;
    },

    etapeSuivante() {
      if (this.etapeActuelle < this.recetteActuelle.instructions.length - 1) {
        this.etapeActuelle++;
      }
    },

    etapePrecedente() {
      if (this.etapeActuelle > 0) {
        this.etapeActuelle--;
      }
    },
  };
}
