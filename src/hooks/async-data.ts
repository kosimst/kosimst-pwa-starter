import { useEffect, useState } from 'react'

const useAsyncData = <Data extends unknown>(promise: Promise<Data>) => {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    promise.then((res) => setData(res))
  }, [promise])

  return data
}

export default useAsyncData
