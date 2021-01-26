import { useMemo } from 'react'
import api from '../../middlewares/firebase/functions'
import useAsyncData from '../../hooks/async-data'
import useConfig from '../../hooks/config'
import CFC from '../../types/cfc'
import HelloWorldPure from './hello-world.pure'

const HelloWorld: CFC<HelloWorldProps> = ({ className, style }) => {
  const dateFormat = useConfig('dateFormat')
  const helloWorldPromise = useMemo(() => api.helloWorld(), [])
  const helloWorld = useAsyncData(helloWorldPromise)

  return (
    <HelloWorldPure
      className={className}
      style={style}
      date={helloWorld?.date}
      dateFormat={dateFormat}
      loading={!helloWorld}
      greeting={helloWorld?.greeting}
    />
  )
}

export interface HelloWorldProps {}

export default HelloWorld
