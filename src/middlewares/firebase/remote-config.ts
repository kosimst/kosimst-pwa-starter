import firebase from './firebase'
import 'firebase/remote-config'
import defaultConfig from '../../constants/default-config'

const remoteConfig = firebase.remoteConfig()

remoteConfig.settings.minimumFetchIntervalMillis = 1000 * 60 * 5
remoteConfig.defaultConfig = (defaultConfig as unknown) as {
  [key: string]: string | number | boolean
}

export default remoteConfig
