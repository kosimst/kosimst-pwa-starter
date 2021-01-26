import firebase from 'firebase-admin'

const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp()
  }
}

export default initFirebase
