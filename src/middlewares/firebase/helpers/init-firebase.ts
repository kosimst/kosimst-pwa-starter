import firebase from 'firebase'
import firebaseCredentials from '../../../config/firebase'

const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseCredentials)
  }
}

export default initFirebase
