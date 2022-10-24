
import { db, fb } from "../../db";
import store from "../store";
import { firebase as config } from '../../config.json';
import firebase from 'firebase/app'
import historiquesPatient from "./historiquesPatient";


class TrimestreService {





    async getTrimestreById(id) {
        let document;
        await db.collection('trimestre', ref => ref.where('id', '==', id)).get().then(querySnapshot => {
            document = querySnapshot.docs.map(doc => doc.data());
            document[0].date = new Date((document[0].date).toDate()).toLocaleDateString("fr-FR")
        })
        return document[0];

    }
    async getAllTrimestre(idDossier) {
        let docs = [];
        //console.log(fb.auth().currentUser);
        await db.collection('trimestres', ref => ref.where('idDossier', '==', idDossier)).get().then(querySnapshot => {  // c'est comme ca que je retrouve les documents
            docs = querySnapshot.docs.map(doc => doc.data());
            docs.forEach(document => {
                try {
                    document.date = new Date((document.date).toDate())
                    console.log(document.date);

                } catch (error) {
                    console.log(document.date);

                }

            })

        })
        return docs;

    }

    async getVat(idDossier) {
        let document;
        await db.collection('vat', ref => ref.where('idDossier', '==', idDossier)).get().then(querySnapshot => {  // c'est comme ca que je retrouve les documents
            document = querySnapshot.docs.map(doc => doc.data());

            try {
                document[0].date1 = new Date((document.date1).toDate()).toLocaleDateString("fr-FR")
            } catch (error) {
            }
            try {
                document[0].date2 = new Date((document.date2).toDate()).toLocaleDateString("fr-FR")

            } catch (error) {

            }
            try {
                document[0].date3 = new Date((document.date3).toDate()).toLocaleDateString("fr-FR")

            } catch (error) {

            }
        })
        return document[0];

    }

    async setVat(vat) {
        await db.collection('vat').doc(vat.id).update(vat);
    }
    async setTrimestre(trimestre) {
        await db.collection('trimestres').doc(trimestre.id).update(trimestre);
    }
    async generateTrimestres(idDossier, idPatient) {
        let trimestre = {
            date: new Date(),
            nbrMoisGrossesse: '',
            tensionArterielle: '',
            ta1: false,
            ta2: false,
            ta3: false,
            ta1Meaning: "T.A. > 14/09",
            ta2Meaning: "T.A. > 13/08 et Prot. ++ ou >",
            ta3Meaning: "T.A. > 14/09 et Prot. ++ ou >",
            anemieSigneClinique: false,
            proteineUrinaire: '',
            tauxHB: false,
            poids: '',
            hauteurUterine: '',
            hauteurUterineAnormale: false,
            mafBcf: false,
            palpation: '',
            presentationVicieuse: false,
            toucherVaginal: '',
            colOuvert: false,
            autreQueCephalique: false,
            perteSang: false,
            promontoireAccessible: '',
            observationSoins: '',
            echoId: '',
            nextRDV: '',
            prisePoidsAnormale: false,
            id: '',
            idPatient: idPatient,
            idDossier: idDossier,
            position: 1
        };
        for (let index = 0; index < 3; index++) {
            trimestre.position = index + 1;
            const ref = await db.collection('trimestres').add(trimestre)
            trimestre.id = ref.id;
            await db.collection('trimestres').doc(ref.id).update(trimestre);
        }
    }

    async generateVat(idDossier, idPatient) {
        let vatFerFoldine = {
            id: '',
            idPatient: idPatient,
            idDossier: idDossier,
            date1: '',
            date2: '',
            date3: ''
        };
        const ref = await db.collection('vat').add(vatFerFoldine)
        vatFerFoldine.id = ref.id;
        await db.collection('vat').doc(ref.id).update(vatFerFoldine);

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


export default new TrimestreService();