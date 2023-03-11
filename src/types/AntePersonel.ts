export class AntePersonel {
  asthme: boolean;
  allergie: boolean;
  diabete: boolean;
  hta: boolean;
  tuberculose: boolean;
  autres: string;
  antePersonelChirurgie: string;
  anteFamiliaux: string;
  id: string;
  idPatient: string;

  constructor(idPatient: string) {
    this.asthme = false;
    this.allergie = false;
    this.diabete = false;
    this.hta = false;
    this.tuberculose = false;
    this.autres = "";
    this.antePersonelChirurgie = "";
    this.anteFamiliaux = "";
    this.id = "";
    this.idPatient = idPatient;
  }
}
