import firebase from 'firebase'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import auth from '../middlewares/firebase/auth'
import userPropertiesQuery from '../middlewares/firebase/queries/user-properties'
import CFC from '../types/cfc'
import User, { UserProperties } from '../../definitions/types/user'

const UserContext = createContext<{
  signIn: (anonym?: boolean) => Promise<void>
  signOut: () => void
  user: User | null
} | null>(null)

const useUser = () => useContext(UserContext)

export const UserWrapper: CFC = ({ children }) => {
  const [firebaseUser, setFirebaseUser] = useState<firebase.User | null>(
    auth.currentUser || null
  )
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (!firebaseUser) {
      setUser(null)
      return
    }

    const userPropsQuery = userPropertiesQuery(firebaseUser.uid)
    const unsubscribe = userPropsQuery.onSnapshot((snap) => {
      if (!snap.exists) {
        snap.ref.set({
          name: firebaseUser.displayName || 'Anonymous User',
        } as UserProperties)
        return
      }

      const userProps = (snap.data() as unknown) as UserProperties
      setUser({ ...firebaseUser, ...userProps })
    })

    return unsubscribe
  }, [firebaseUser])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((newUser) =>
      setFirebaseUser(newUser || null)
    )

    return unsubscribe
  }, [])

  const signIn = useCallback(async (anonym: boolean = false) => {
    if (anonym) {
      await auth.signInAnonymously()
      return
    }

    const provider = new firebase.auth.GoogleAuthProvider()
    let result: firebase.auth.UserCredential | null = null

    try {
      result = await auth.signInWithPopup(provider)
      if (!result || !result.credential) throw new Error('Got null as result')
    } catch {
      throw new Error('Failed to sign in vie Google')
    }

    if (auth.currentUser) {
      auth.currentUser.linkWithCredential(result.credential)
    }
  }, [])
  const signOut = useCallback(() => {
    auth.signOut()
  }, [])

  const userObject = useMemo(() => ({ signIn, signOut, user }), [
    signIn,
    signOut,
    user,
  ])

  return (
    <UserContext.Provider value={userObject}>{children}</UserContext.Provider>
  )
}

export default useUser
