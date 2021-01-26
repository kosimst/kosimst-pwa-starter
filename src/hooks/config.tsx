import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import defaultConfig from '../constants/default-config'
import userConfigQuery from '../middlewares/firebase/queries/user-config'
import remoteConfig from '../middlewares/firebase/remote-config'
import Config from '../../definitions/config/config'
import useUser from './user'

type GetAllConfig = {
  [key in keyof Config]: {
    _value: Config[key]
    _source: 'default' | string
  }
}

const ConfigContext = createContext<Config>(defaultConfig)

const useConfig = (key: keyof Config) => useContext(ConfigContext)[key]

export const ConfigWrapper: React.FC = ({ children }) => {
  const [firebaseConfig, setFirebaseConfig] = useState<Config>(defaultConfig)
  const [userConfig, setUserConfig] = useState<Partial<Config | null>>(null)
  const [config, setConfig] = useState<Config>(firebaseConfig)

  const { user } = useUser() || {}

  useEffect(() => {
    if (!user) {
      setUserConfig(null)
      return
    }

    const query = userConfigQuery(user.uid)

    const unsubscribe = query.onSnapshot((snap) => {
      if (!snap.exists) {
        setUserConfig(null)
        return
      }

      setUserConfig((snap.data() as unknown) as Partial<Config>)
    })

    return unsubscribe
  }, [user])

  useEffect(() => {
    if (!userConfig || !Object.keys(userConfig).length) {
      setConfig(firebaseConfig)
      return
    }

    const newConfig: Partial<Config> = {}
    for (const [key, firebaseValue] of Object.entries(firebaseConfig)) {
      newConfig[key as keyof Config] =
        userConfig[key as keyof Config] ?? firebaseValue
    }

    setConfig(newConfig as Config)
  }, [firebaseConfig, userConfig])

  const fetchConfig = useCallback(async () => {
    await remoteConfig.fetchAndActivate()
    const newConfigRaw = (remoteConfig.getAll() as unknown) as GetAllConfig
    const newConfig: Partial<Config> = {}

    for (const [key, { _value: value }] of Object.entries(newConfigRaw)) {
      newConfig[key as keyof GetAllConfig] = value
    }

    setFirebaseConfig(newConfig as Config)
  }, [])

  useEffect(() => {
    fetchConfig()
  }, [fetchConfig])

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  )
}

export default useConfig
