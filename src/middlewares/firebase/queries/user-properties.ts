import firestore from '../firestore'

const userPropertiesQuery = (uid: string) =>
  firestore.collection('users').doc(uid)

export default userPropertiesQuery
