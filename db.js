
import firebase from 'firebase/app'
import 'firebase/firestore'
import config from './config.json'
// Get a Firestore instance
export const fb = firebase.initializeApp(config.firebase)
export const db = fb.firestore()



// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })