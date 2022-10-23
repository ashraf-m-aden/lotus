
import { db, fb } from "../../db";
import store from "../store";
import { firebase as config } from '../../config.json';
import firebase from 'firebase/app'
import historiquesPatient from "./historiquesPatient";
import trimestre from "./trimestre";
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

class PatientService {
    async getPatient(id) {
        let document;
        await db.collection('patients', ref => ref.where('id', '==', id)).get().then(querySnapshot => {
            document = querySnapshot.docs.map(doc => doc.data());
            document[0].date = new Date((document[0].date).toDate()).toLocaleDateString("fr-FR")
            document[0].dob = new Date((document[0].dob)).toLocaleDateString("fr-FR")
        })
        return document[0];

    }
    async getPatients() {
        let docs = [];
        //console.log(fb.auth().currentUser);
        await db.collection('patients', ref => ref.where('enabled', '==', true)).get().then(querySnapshot => {  // c'est comme ca que je retrouve les documents
            const document = querySnapshot.docs.map(doc => doc.data());
            if (document.length > 0) {
                document[0].date = new Date((document[0].date).toDate()).toLocaleDateString("fr-FR")
                document[0].dob = new Date((document[0].dob)).toLocaleDateString("fr-FR")
                docs.push(document[0])   // je fais ca [0] pack bizarement ca retourne un  array au lieu d'un seul doc
            }
        })
        return docs;

    }

    async deletePatient(id) {
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
    async registerPatient(patient) {
        let user = store.getters.getUserData  // je recuperer les données de l'user connecté dans vuex
        const password = patient.number
        const firebaseConfiguration = config
        const tempApp = firebase.initializeApp(firebaseConfiguration, "tempApp");
        const tempAppAuth = firebase.auth(tempApp);
        await tempAppAuth.createUserWithEmailAndPassword(patient.email, password)
            .then(async (newUser) => {
                patient.id = newUser.user.uid;
                patient.creerPar = user.id;
                let dossier = {  // le dossier c'est la pregnancy, un dossier par pregnancy
                    id: patient.dossiers[0],
                    date: patient.date,
                    creerPar: user.id,
                    gender: '',
                    patientId: patient.id,
                    enabled: true
                }
                // tslint:disable-next-line:max-line-length
                const newPatient = Object.assign({}, patient); // on utilise object assign pack firebase refuse un objet personalisé, c pour faire un objet pure javascript
                // const newDossier = await db.collection('dossier').add(dossier); // c'est dans le cas le numero de dossier est generé automatiquement
                // dossier.id = newDossier.id; 
                // await db.collection('dossier').doc(dossier.id).update(dossier);
                await db.collection('dossiers').doc(patient.dossier).set(dossier);
                // patient.dossier.push(dossier.id); c'est dans le cas le numero de dossier est generé automatiquement

                await db.collection('patients').doc(patient.id).set(newPatient);
                await historiquesPatient.generateAnteGyneco(patient.id)
                await historiquesPatient.generateAnteObstre(patient.id)
                await historiquesPatient.generateAntePersonel(patient.id)
                await historiquesPatient.generateBilanComplet(patient.id)
                await historiquesPatient.generateGrossesseActuelle(patient.id)
                await trimestre.generateTrimestres(dossier.id, patient.id);
                await trimestre.generateVat(dossier.id, patient.id);
            })
            .catch(error => {
                console.log(error);
            }).finally(() => {
                tempAppAuth.signOut()
                    .then(() => tempApp.delete());
            });

    }
    async retrieveTousDossierPatient(id) {
        let dossiers = []
        await db.collection('dossiers', ref => ref.where('patientId', '==', id).where('enabled', '==', true)).get()
            .then((querySnapshot) => {
                dossiers = querySnapshot.docs.map(doc => doc.data());
                dossiers.forEach(document => {
                    document.date = new Date((document.date).toDate()).toLocaleDateString("fr-FR")
                });
            });
        return dossiers;
    }

    async createDossier(dossier, patient) {
        patient.dossiers.push(dossier.id)

        await db.collection('dossiers').doc(dossier.id).set(dossier)
        await db.collection('patients').doc(patient.id).update(patient);
        await trimestre.generateTrimestres(dossier.id, patient.id)
        await trimestre.generateVat(dossier.id, patient.id)

    }
};


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