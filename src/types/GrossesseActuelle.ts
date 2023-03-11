export class GrossesseActuelle {
  gestite: string;
  parite: string;
  grossesseEvolutiveNormale: boolean;
  menaceFausseCouche: boolean;
  menaceAccouchementPremature: boolean;
  rupturePrematureMembrane: boolean;
  absenceMouvementActifFoetal: boolean;
  autres: string;
  id: string;
  idPatient: string;

  constructor(idPatient: string) {
    this.gestite = "";
    this.parite = "";
    this.grossesseEvolutiveNormale = false;
    this.menaceFausseCouche = false;
    this.menaceAccouchementPremature = false;
    this.rupturePrematureMembrane = false;
    this.absenceMouvementActifFoetal = false;
    this.autres = "";
    this.id = "";
    this.idPatient = idPatient;
  }
}
