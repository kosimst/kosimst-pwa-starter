import { useState, useEffect, useCallback } from 'react'

const useOnline = () => {
  const [online, setOnline] = useState<boolean>(false)

  const setOnlineTo = useCallback(
    (value: boolean) => () => setOnline(value),
    []
  )

  useEffect(() => {
    const setToTrue = setOnlineTo(true)
    const setToFalse = setOnlineTo(false)

    window.addEventListener('online', setToTrue)
    window.addEventListener('offline', setToFalse)

    setOnline(navigator.onLine)

    return () => {
      window.removeEventListener('online', setToTrue)
      window.removeEventListener('offline', setToFalse)
    }
  }, [setOnlineTo])

  return online
}

export default useOnline
