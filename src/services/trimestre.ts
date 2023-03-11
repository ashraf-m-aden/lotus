import { VatFerFoldine } from "./../types/VatFerFoldine";
import { Trimestre } from "@/types/Trimestre";
import { db } from "../../db";

class TrimestreService {
  async getTrimestreById(id: string) {
    let trimestre;
    await db
      .collection("trimestre")
      .where("id", "==", id)
      .get()
      .then((querySnapshot) => {
        const document = querySnapshot.docs.map((doc) => doc.data());
        trimestre = document[0];
        trimestre.date = new Date(document[0].date.toDate()).toLocaleDateString(
          "fr-FR"
        );
      });
    return trimestre;
  }
  async getAllTrimestre(idDossier: string) {
    let docs: any = [];
    //console.log(fb.auth().currentUser);
    await db
      .collection("trimestres")
      .where("idDossier", "==", idDossier)
      .get()
      .then((querySnapshot) => {
        // c'est comme ca que je retrouve les documents
        docs = querySnapshot.docs.map((doc) => doc.data());
        docs.forEach((document: any) => {
          try {
            document.date = new Date(document.date.toDate());
            console.log(document.date);
          } catch (error) {
            console.log(document.date);
          }
        });
      });
    return docs;
  }

  async getVat(idDossier: string) {
    let document: any[] = [];
    await db
      .collection("vat")
      .where("idDossier", "==", idDossier)
      .get()
      .then((querySnapshot) => {
        // c'est comme ca que je retrouve les documents
        document = querySnapshot.docs.map((doc) => doc.data());
        try {
          document[0].date1 = new Date(
            document[0].date1.toDate()
          ).toLocaleDateString("fr-FR");
        } catch (error) {
          console.log(error);
        }
        try {
          document[0].date2 = new Date(
            document[0].date2.toDate()
          ).toLocaleDateString("fr-FR");
        } catch (error) {
          console.log(error);
        }
        try {
          document[0].date3 = new Date(
            document[0].date3.toDate()
          ).toLocaleDateString("fr-FR");
        } catch (error) {
          console.log(error);
        }
      });
    return document[0];
  }

  async setVat(vat: VatFerFoldine) {
    await db.collection("vat").doc(vat.id).update(vat);
  }
  async setTrimestre(trimestre: Trimestre) {
    await db.collection("trimestres").doc(trimestre.id).update(trimestre);
  }
  async generateTrimestres(idDossier: string, idPatient: string) {
    const trimestre = new Trimestre(idPatient, idDossier, 1);

    for (let index = 0; index < 3; index++) {
      trimestre.position = index + 1;
      const ref = await db.collection("trimestres").add(trimestre);
      trimestre.id = ref.id;
      await db.collection("trimestres").doc(ref.id).update(trimestre);
    }
  }

  async generateVat(idDossier: string, idPatient: string) {
    const vatFerFoldine = new VatFerFoldine(idPatient, idDossier);

    const ref = await db.collection("vat").add(vatFerFoldine);
    vatFerFoldine.id = ref.id;
    await db.collection("vat").doc(ref.id).update(vatFerFoldine);
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

export default new TrimestreService();
