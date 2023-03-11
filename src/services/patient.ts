import { Dossier } from "./../types/Dossier";
import { Patient } from "./../types/Patient";
import { db } from "../../db";
import historiquesPatient from "./historiquesPatient";
import trimestre from "./trimestre";
import firebase from "firebase/compat/app";
import { userStore } from "@/store/user";
import config from "../../config.json";
class PatientService {
  store = userStore();
  async getPatient(id: string) {
    let patient;
    await db
      .collection("patients")
      .where("id", "==", id)
      .get()
      .then((querySnapshot) => {
        const document = querySnapshot.docs.map((doc) => doc.data());
        patient = document[0];
        patient.date = new Date(patient.date.toDate()).toLocaleDateString(
          "fr-FR"
        );
        patient.dob = new Date(patient.dob).toLocaleDateString("fr-FR");
      });
    return patient;
  }
  async getPatients() {
    // eslint-disable-next-line prefer-const
    let docs: firebase.firestore.DocumentData[] = [];
    //console.log(fb.auth().currentUser);
    await db
      .collection("patients")
      .where("enabled", "==", true)
      .get()
      .then((querySnapshot) => {
        // c'est comme ca que je retrouve les documents
        const document = querySnapshot.docs.map((doc) => doc.data());
        if (document.length > 0) {
          document[0].date = new Date(
            document[0].date.toDate()
          ).toLocaleDateString("fr-FR");
          document[0].dob = new Date(document[0].dob).toLocaleDateString(
            "fr-FR"
          );
          docs.push(document[0]); // je fais ca [0] pack bizarement ca retourne un  array au lieu d'un seul doc
        }
      });
    return docs;
  }

  async deletePatient(id: string) {
    // await db.collection('surveillances', ref => ref.where('idPatient', '==', id)).get()
    //     .then((querySnapshot) => {
    //         querySnapshot.forEach(element => {
    //             element.ref.delete()
    //         });
    //     });
    // await db.collection('dossiers', ref => ref.where('idPatient', '==', id)).get()
    //     .then((querySnapshot) => {
    //         querySnapshot.forEach(element => {
    //             element.ref.delete()
    //         });
    //     });
    // await db.collection('patients').doc(id).update( )
    //     .then((querySnapshot) => {
    //         querySnapshot.forEach(element => {
    //             element.ref.delete()
    //         });
    //     });
  }
  async registerPatient(patient: Patient) {
    const user = this.store.$state.userData!; // je recuperer les données de l'user connecté dans vuex
    const password = patient.number;
    const firebaseConfiguration = config;
    const tempApp = firebase.initializeApp(firebaseConfiguration, "tempApp");
    const tempAppAuth = firebase.auth(tempApp);
    await tempAppAuth
      .createUserWithEmailAndPassword(patient.email, password)
      .then(async (newUser) => {
        patient.id = newUser.user?.uid;
        patient.creerPar = user?.id;
        const dossier: Dossier = {
          // le dossier c'est la pregnancy, un dossier par pregnancy
          id: patient.dossiers[0],
          date: patient.date,
          creerPar: user.id!,
          gender: "",
          patientId: patient.id!,
          enabled: true,
        };
        // tslint:disable-next-line:max-line-length
        const newPatient = Object.assign({}, patient); // on utilise object assign pack firebase refuse un objet personalisé, c pour faire un objet pure javascript
        // const newDossier = await db.collection('dossier').add(dossier); // c'est dans le cas le numero de dossier est generé automatiquement
        // dossier.id = newDossier.id;
        // await db.collection('dossier').doc(dossier.id).update(dossier);
        await db.collection("dossiers").doc(patient.dossiers[0]).set(dossier);
        // patient.dossier.push(dossier.id); c'est dans le cas le numero de dossier est generé automatiquement

        await db.collection("patients").doc(patient.id).set(newPatient);
        await historiquesPatient.generateAnteGyneco(patient.id!);
        await historiquesPatient.generateAnteObstre(patient.id!);
        await historiquesPatient.generateAntePersonel(patient.id!);
        await historiquesPatient.generateBilanComplet(patient.id!);
        await historiquesPatient.generateGrossesseActuelle(patient.id!);
        await trimestre.generateTrimestres(dossier.id, patient.id!);
        await trimestre.generateVat(dossier.id, patient.id!);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        tempAppAuth.signOut().then(() => tempApp.delete());
      });
  }
  async retrieveTousDossierPatient(id: any) {
    let dossiers: firebase.firestore.DocumentData[] = [];
    await db
      .collection("dossiers")
      .where("patientId", "==", id)
      .where("enabled", "==", true)
      .get()
      .then((querySnapshot) => {
        dossiers = querySnapshot.docs.map((doc) => doc.data());
        dossiers.forEach((document) => {
          document.date = new Date(document.date.toDate()).toLocaleDateString(
            "fr-FR"
          );
        });
      });
    return dossiers;
  }

  async createDossier(dossier: Dossier, patient: Patient) {
    patient.dossiers.push(dossier.id);

    await db.collection("dossiers").doc(dossier.id).set(dossier);
    await db.collection("patients").doc(patient.id).update(patient);
    await trimestre.generateTrimestres(dossier.id, patient.id!);
    await trimestre.generateVat(dossier.id, patient.id!);
  }
}

// // retrieve a collection
// db.collection('documents')
//     .get()
//     .then(querySnapshot => {
//         const documents = querySnapshot.docs.map(doc => doc.data())
//         // do something with documents
//     })

// // retrieve a document
// db.collection('documents')
//     .doc(documentId)
//     .get()
//     .then(snapshot => {
//         const document = snapshot.data()
//         // do something with document
//     })

export default new PatientService();
