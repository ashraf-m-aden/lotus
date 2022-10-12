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
        surveillance.id = newAntePersonel.id;
        await db.collection("antePersonel").doc(surveillance.id).update(surveillance);
    }
    async setAntePersonel(antePersonel) {

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





    ///////////////////////////////////////////// ANTECEDENTS GYNECOLOGIQUE





    /////////////////////////////////////////// GROSSESSE ACTUELLE









    ///////////////////////////////// BILAN COMPLET

}

export default new HistoriqueService();
