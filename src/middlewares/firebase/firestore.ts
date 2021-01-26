import firebase from './firebase'
import 'firebase/firestore'
import { useFirestoreEmulator } from '../../config/firebase'

if (window.location.hostname === 'localhost' && useFirestoreEmulator) {
  firebase.firestore().useEmulator('localhost', 6000)
}

const firestore = firebase.firestore()

export default firestore
