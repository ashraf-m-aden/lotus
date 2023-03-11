import { BilanComplet } from "./../types/BilanComplet";
import { GrossesseActuelle } from "./../types/GrossesseActuelle";
import { AnteGyneco } from "../types/AnteGyneco";
import { AnteObstre } from "../types/AnteObstre";
import { AntePersonel } from "@/types/AntePersonel";
import { db } from "../../db";

// interface Formation {
//     inscription: Boolean,
//     started: Boolean,
//     finished: Boolean,
//     numberOfMonth: Number,
//     professeurId: String,
//     startDate: String,
//     endDate: String,
//     students_inscris: Array,  // ici l'etudiant a payé
//     students_reserv: Array,   // ici il s'est juste inscrit à la session en ligne
//     courseId: String,
//     courseName: String

// }

class HistoriqueService {
  ////////////////////////////// ANTECEDENT PERSONEL
  async generateAntePersonel(idPatient: string) {
    const antePersonel: AntePersonel = {
      asthme: false,
      allergie: false,
      diabete: false,
      hta: false,
      tuberculose: false,
      autres: "",
      antePersonelChirurgie: "",
      anteFamiliaux: "",
      id: "",
      idPatient: idPatient,
    };
    const newAntePersonel = await db
      .collection("antePersonel")
      .add(antePersonel);
    antePersonel.id = newAntePersonel.id;
    await db
      .collection("antePersonel")
      .doc(antePersonel.id)
      .update(antePersonel);
  }
  async setAntePersonel(antePersonel: AntePersonel) {
    console.log(antePersonel);
    await db
      .collection("antePersonel")
      .doc(antePersonel.id)
      .update(antePersonel);
  }
  async getAntePersonel(idPatient: string) {
    let document: any[] = [];
    await db
      .collection("antePersonel")
      .where("idPatient", "==", idPatient)
      .get()
      .then((querySnapshot) => {
        document = querySnapshot.docs.map((doc) => doc.data());
      });
    return document[0];
  }

  /////////////////////////////////////////////////// ANTECEDENT OBSTETRICAUX

  async generateAnteObstre(idPatient: string) {
    const anteObstre = {
      nbrGrossesse: "",
      nbrGrossesseNormal: "",
      nbrGrossesseComplique: "",
      complicationGrossesse: "",
      nbrAvortement: "",
      avortementMois: "",
      causeAvortement: "",
      nbrAccouchement: "",
      nbrAccouchementNormaux: "",
      nbrAccouchmentPathologiques: "",
      pathologies: "",
      nbrEnfantsVivant: "",
      nbrEnfantsMortNes: "",
      nbrEnfantsDecedes: "",
      raisonDeces: "",
      id: "",
      idPatient: idPatient,
    };
    const newAnteObstre = await db.collection("anteObstre").add(anteObstre);
    anteObstre.id = newAnteObstre.id;

    await db.collection("anteObstre").doc(anteObstre.id).update(anteObstre);
  }
  async setAnteObstre(anteObstre: AnteObstre) {
    await db.collection("anteObstre").doc(anteObstre.id).update(anteObstre);
  }
  async getAnteObstre(idPatient: string) {
    let document: any[] = [];
    await db
      .collection("anteObstre")
      .where("idPatient", "==", idPatient)
      .get()
      .then((querySnapshot) => {
        document = querySnapshot.docs.map((doc) => doc.data());
      });
    return document[0];
  }

  ///////////////////////////////////////////// ANTECEDENTS GYNECOLOGIQUE

  async generateAnteGyneco(idPatient: string) {
    const anteGyneco = {
      anomalieMamaire: "",
      infectionGenitale: "",
      autres: "",
      id: "",
      idPatient: idPatient,
    };
    const newData = await db.collection("anteGyneco").add(anteGyneco);
    anteGyneco.id = newData.id;

    await db.collection("anteGyneco").doc(anteGyneco.id).update(anteGyneco);
  }
  async setAnteGyneco(anteGyneco: AnteGyneco) {
    await db.collection("anteGyneco").doc(anteGyneco.id).update(anteGyneco);
  }
  async getAnteGyneco(idPatient: string) {
    let document: any[] = [];
    await db
      .collection("anteGyneco")
      .where("idPatient", "==", idPatient)
      .get()
      .then((querySnapshot) => {
        document = querySnapshot.docs.map((doc) => doc.data());
      });
    return document[0];
  }

  /////////////////////////////////////////// GROSSESSE ACTUELLE

  async generateGrossesseActuelle(idPatient: string) {
    const grossesseActuelle = {
      gestite: "",
      parite: "",
      grossesseEvolutiveNormale: false,
      menaceFausseCouche: false,
      menaceAccouchementPremature: false,
      rupturePrematureMembrane: false,
      absenceMouvementActifFoetal: false,
      autres: "",
      id: "",
      idPatient: idPatient,
    };
    const newData = await db
      .collection("grossesseActuelle")
      .add(grossesseActuelle);
    grossesseActuelle.id = newData.id;

    await db
      .collection("grossesseActuelle")
      .doc(grossesseActuelle.id)
      .update(grossesseActuelle);
  }
  async setGrossesseActuell(grossesseActuelle: GrossesseActuelle) {
    await db
      .collection("grossesseActuelle")
      .doc(grossesseActuelle.id)
      .update(grossesseActuelle);
  }
  async getGrossesseActuell(idPatient: string) {
    let document: any[] = [];
    await db
      .collection("grossesseActuelle")
      .where("idPatient", "==", idPatient)
      .get()
      .then((querySnapshot) => {
        document = querySnapshot.docs.map((doc) => doc.data());
      });
    return document[0];
  }

  ///////////////////////////////// BILAN COMPLET

  async generateBilanComplet(idPatient: string) {
    const bilanComplet = {
      nfs: "",
      gsrh: "",
      toxoplasmose: "",
      albuminurie: "",
      glycemie: "",
      hepatite: "",
      rubeole: "",
      sucre: "",
      hiv: "",
      id: "",
      idPatient: idPatient,
    };
    const newData = await db.collection("bilanComplet").add(bilanComplet);
    bilanComplet.id = newData.id;

    await db
      .collection("bilanComplet")
      .doc(bilanComplet.id)
      .update(bilanComplet);
  }
  async setBilanComplet(bilanComplet: BilanComplet) {
    await db
      .collection("bilanComplet")
      .doc(bilanComplet.id)
      .update(bilanComplet);
  }
  async getBilanComplet(idPatient: string) {
    let document: any[] = [];
    await db
      .collection("bilanComplet")
      .where("idPatient", "==", idPatient)
      .get()
      .then((querySnapshot) => {
        document = querySnapshot.docs.map((doc) => doc.data());
      });
    return document[0];
  }
}

export default new HistoriqueService();
