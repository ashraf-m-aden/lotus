export class BilanComplet {
  nfs: string;
  gsrh: string;
  toxoplasmose: string;
  albuminurie: string;
  glycemie: string;
  hepatite: string;
  rubeole: string;
  sucre: string;
  hiv: string;
  id: string;
  idPatient: string;
  constructor(idPatient: string) {
    this.nfs = "";
    this.gsrh = "";
    this.toxoplasmose = "";
    this.albuminurie = "";
    this.glycemie = "";
    this.hepatite = "";
    this.rubeole = "";
    this.sucre = "";
    this.hiv = "";
    this.id = "";
    this.idPatient = idPatient;
  }
}
