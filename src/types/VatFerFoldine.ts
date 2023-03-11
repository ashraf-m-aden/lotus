export class VatFerFoldine {
  id: string;
  idPatient: string;
  idDossier: string;
  date1: Date | undefined;
  date2: Date | undefined;
  date3: Date | undefined;
  constructor(idPatient: string, idDossier: string) {
    this.id = "";
    this.idPatient = idPatient;
    this.idDossier = idDossier;
    this.date1 = new Date();
    this.date2 = new Date();
    this.date3 = new Date();
  }
}
