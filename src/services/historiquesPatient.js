import { db, fb } from "../../db";
import store from "../store";
import { firebase as config } from "../../config.json";
import firebase from "firebase/app";

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
    async generateAntePersonel(idPatient) {
        let antePersonel = {
            asthme: false,
            allergie: false,
            diabete: false,
            hta: false,
            tuberculose: '',
            autres: '',
            antePersonelChirurgie: '',
            anteFamiliaux: ''
            , id: '', idPatient: idPatient
        };
        const newAntePersonel = await db.collection("antePersonel").add(antePersonel);
        antePersonel.id = newAntePersonel.id;
        await db.collection("antePersonel").doc(antePersonel.id).update(antePersonel);
    }
    async setAntePersonel(antePersonel) {
        console.log(antePersonel);
        await db
            .collection("antePersonel").doc(antePersonel.id).update(antePersonel)
    }
    async getAntePersonel(idPatient) {
        let document;
        await db
            .collection("antePersonel", (ref) => ref.where("idPatient", "==", idPatient))
            .get()
            .then((querySnapshot) => {
                document = querySnapshot.docs.map((doc) => doc.data());
            });
        return document[0];
    }

    /////////////////////////////////////////////////// ANTECEDENT OBSTETRICAUX

    async generateAnteObstre(idPatient) {
        let anteObstre = {
            nbrGrossesse: '',
            nbrGrossesseNormal: '',
            nbrGrossesseComplique: '',
            complicationGrossesse: '',
            nbrAvortement: '',
            avortementMois: '',
            causeAvortement: '',
            nbrAccouchement: '',
            nbrAccouchementNormaux: '',
            nbrAccouchmentPathologiques: '',
            pathologies: '',
            nbrEnfantsVivant: '',
            nbrEnfantsMortNes: '',
            nbrEnfantsDecedes: '',
            raisonDeces: ''
            , id: '', idPatient: idPatient
        };
        const newAnteObstre = await db.collection("anteObstre").add(anteObstre);
        anteObstre.id = newAnteObstre.id;

        await db.collection("anteObstre").doc(anteObstre.id).update(anteObstre);
    }
    async setAnteObstre(anteObstre) {

        await db
            .collection("anteObstre").doc(anteObstre.id).update(anteObstre)
    }
    async getAnteObstre(idPatient) {
        let document;
        await db
            .collection("anteObstre", (ref) => ref.where("idPatient", "==", idPatient))
            .get()
            .then((querySnapshot) => {
                document = querySnapshot.docs.map((doc) => doc.data());
            });
        return document[0];
    }



    ///////////////////////////////////////////// ANTECEDENTS GYNECOLOGIQUE


    async generateAnteGyneco(idPatient) {
        let anteGyneco = {
            anomalieMamaire: '',
            infectionGenitale: '',
            autres: ''
            , id: '', idPatient: idPatient
        };
        const newData = await db.collection("anteGyneco").add(anteGyneco);
        anteGyneco.id = newData.id;

        await db.collection("anteGyneco").doc(anteGyneco.id).update(anteGyneco);
    }
    async setAnteGyneco(anteObstre) {

        await db
            .collection("anteGyneco").doc(anteGyneco.id).update(anteObstre)
    }
    async getAnteGyneco(idPatient) {
        let document;
        await db
            .collection("anteGyneco", (ref) => ref.where("idPatient", "==", idPatient))
            .get()
            .then((querySnapshot) => {
                document = querySnapshot.docs.map((doc) => doc.data());
            });
        return document[0];
    }



    /////////////////////////////////////////// GROSSESSE ACTUELLE



    async generateGrossesseActuelle(idPatient) {
        let grossesseActuelle = {
            gestite: '',
            parite: '',
            grossesseEvolutiveNormale: false,
            menaceFausseCouche: false,
            menaceAccouchementPremature: false,
            rupturePrematureMembrane: false,
            absenceMouvementActifFoetal: false,
            autres: ''
            , id: '', idPatient: idPatient
        };
        const newData = await db.collection("grossesseActuelle").add(grossesseActuelle);
        grossesseActuelle.id = newData.id;

        await db.collection("grossesseActuelle").doc(grossesseActuelle.id).update(grossesseActuelle);
    }
    async setGrossesseActuell(grossesseActuelle) {

        await db
            .collection("grossesseActuelle").doc(grossesseActuelle.id).update(grossesseActuelle)
    }
    async getGrossesseActuell(idPatient) {
        let document;
        await db
            .collection("grossesseActuelle", (ref) => ref.where("idPatient", "==", idPatient))
            .get()
            .then((querySnapshot) => {
                document = querySnapshot.docs.map((doc) => doc.data());
            });
        return document[0];
    }






    ///////////////////////////////// BILAN COMPLET


    async generateBilanComplet(idPatient) {
        let bilanComplet = {
            nfs: '',
            gsrh: '',
            toxoplasmose: '',
            albuminurie: '',
            glycemie: '',
            hepatite: '',
            rubeole: '',
            sucre: '',
            hiv: ''
            , id: '', idPatient: idPatient
        };
        const newData = await db.collection("bilanComplet").add(bilanComplet);
        bilanComplet.id = newData.id;

        await db.collection("bilanComplet").doc(bilanComplet.id).update(bilanComplet);
    }
    async setBilanComplet(bilanComplet) {

        await db
            .collection("bilanComplet").doc(bilanComplet.id).update(bilanComplet)
    }
    async getBilanComplet(idPatient) {
        let document;
        await db
            .collection("bilanComplet", (ref) => ref.where("idPatient", "==", idPatient))
            .get()
            .then((querySnapshot) => {
                document = querySnapshot.docs.map((doc) => doc.data());
            });
        return document[0];
    }

}

export default new HistoriqueService();
