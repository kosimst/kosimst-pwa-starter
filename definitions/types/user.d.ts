import firebase from 'firebase'

interface User extends firebase.User, UserProperties {}

export interface UserProperties {
  name: string
}

export default User
