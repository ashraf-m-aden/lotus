
import { db, fb } from "../../db";
import store from "../store";
import { firebase as config } from '../../config.json';
import firebase from 'firebase/app'

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
        await db.collection('surveillances', ref => ref.where('idPatient', '==', id)).get()
            .then((querySnapshot) => {
                querySnapshot.forEach(element => {
                    element.ref.delete()
                });
            });
        await db.collection('dossiers', ref => ref.where('idPatient', '==', id)).get()
            .then((querySnapshot) => {
                querySnapshot.forEach(element => {
                    element.ref.delete()
                });
            });
        await db.collection('patients', ref => ref.where('id', '==', id)).get()
            .then((querySnapshot) => {
                querySnapshot.forEach(element => {
                    element.ref.delete()
                });
            });
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
                let dossier = {
                    id: '',
                    date: patient.date,
                    creerPar: user.id,
                    gender: '',
                    patientId: patient.id
                }
                // tslint:disable-next-line:max-line-length
                const newPatient = Object.assign({}, patient); // on utilise object assign pack firebase refuse un objet personalisé, c pour faire un objet pure javascript
                const newDossier = await db.collection('dossier').add(dossier);
                dossier.id = newDossier.id;
                await db.collection('dossier').doc(dossier.id).update(dossier);
                patient.dossier.push(dossier.id);
                await db.collection('patients').doc(patient.id).set(newPatient);

            })
            .catch(error => {
                console.log(error);
            }).finally(() => {
                tempAppAuth.signOut()
                    .then(() => tempApp.delete());
            });

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