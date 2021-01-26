import { useEffect } from 'react'
import { appName } from '../config/app'

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} - ${appName}`
  }, [title])
}

export default useTitle
