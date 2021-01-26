import firebase from './firebase'
import 'firebase/functions'

import Api from '../../../definitions/api'
import parseDates from './helpers/parse-dates'
import { useFunctionsEmulator } from '../../config/firebase'

if (window.location.hostname === 'localhost' && useFunctionsEmulator) {
  firebase.app().functions('europe-west3').useEmulator('localhost', 7000)
}

type ApiProxyFunction<name extends keyof Api> = Api[name]['input'] extends null
  ? () => Promise<Api[name]['output']>
  : (input: Api[name]['input']) => Promise<Api[name]['output']>

type ApiProxy = {
  [name in keyof Api]: ApiProxyFunction<name>
}

const api = new Proxy<ApiProxy>({} as ApiProxy, {
  get(_, key: keyof Api) {
    return (async (input?: Api[typeof key]['input']) => {
      const { data } = await firebase
        .app()
        .functions('europe-west3')
        .httpsCallable(String(key))(input)

      return parseDates(data)
    }) as ApiProxyFunction<typeof key>
  },
})

export default api
