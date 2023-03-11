// import { Dossier } from "./Dossier";
export class Patient {
  name: string;
  cin: string;
  email: string;
  number: string;
  address: string;
  dob: string;
  date: Date;
  dossiers: Array<string>;
  enabled: boolean;
  profession: string;
  structure: string;
  taille: string;
  spouse: string;
  id: string | undefined;
  creerPar: string;

  constructor(userId: string) {
    this.name = "";
    this.cin = "";
    this.email = "";
    this.number = "";
    this.address = "";
    this.dob = "";
    this.date = new Date();
    this.dossiers = [];
    this.enabled = true;
    this.profession = "";
    this.structure = "";
    this.taille = "";
    this.spouse = "";
    this.creerPar = userId;
  }
}
