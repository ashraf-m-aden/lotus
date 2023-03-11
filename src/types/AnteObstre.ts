export class AnteObstre {
  nbrGrossesse: string;
  nbrGrossesseNormal: string;
  nbrGrossesseComplique: string;
  complicationGrossesse: string;
  nbrAvortement: string;
  avortementMois: string;
  causeAvortement: string;
  nbrAccouchement: string;
  nbrAccouchementNormaux: string;
  nbrAccouchmentPathologiques: string;
  pathologies: string;
  nbrEnfantsVivant: string;
  nbrEnfantsMortNes: string;
  nbrEnfantsDecedes: string;
  raisonDeces: string;
  id: string;
  idPatient: string;

  constructor(idPatient: string) {
    this.nbrGrossesse = "";
    this.nbrGrossesseNormal = "";
    this.nbrGrossesseComplique = "";
    this.complicationGrossesse = "";
    this.nbrAvortement = "";
    this.avortementMois = "";
    this.causeAvortement = "";
    this.nbrAccouchement = "";
    this.nbrAccouchementNormaux = "";
    this.nbrAccouchmentPathologiques = "";
    this.pathologies = "";
    this.nbrEnfantsVivant = "";
    this.nbrEnfantsMortNes = "";
    this.nbrEnfantsDecedes = "";
    this.raisonDeces = "";
    this.id = "";
    this.idPatient = idPatient;
  }
}
