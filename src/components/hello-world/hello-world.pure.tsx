import clsx from 'clsx'
import { useMemo } from 'react'
import CFC from '../../types/cfc'
import Config from '../../../definitions/config/config'
import useStyles from './styles'

const HelloWorldPure: CFC<HelloWorldPureProps> = ({
  className,
  style,
  dateFormat,
  loading,
  date,
  greeting,
}) => {
  const styles = useStyles()

  const isLoaded = useMemo(() => !loading && date && greeting !== undefined, [
    date,
    greeting,
    loading,
  ])

  return (
    <div className={clsx(className)} style={style}>
      {isLoaded ? (
        <>
          <div>
            <span>Date: </span>
            <span>
              {dateFormat === 'date'
                ? date?.toLocaleDateString()
                : date?.toLocaleTimeString()}
            </span>
          </div>
          <div>
            <span>Greeting: </span>
            <span>{greeting}</span>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export interface HelloWorldPureProps {
  greeting?: string
  date?: Date
  dateFormat: Config['dateFormat']
  loading: boolean
}

export default HelloWorldPure
