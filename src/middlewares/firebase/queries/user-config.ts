import firestore from '../firestore'

const userConfigQuery = (uid: string, config: string = 'default') =>
  firestore.collection('users').doc(uid).collection('config').doc(config)

export default userConfigQuery
