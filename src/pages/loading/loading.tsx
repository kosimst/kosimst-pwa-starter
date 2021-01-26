import useTitle from '../../hooks/title'
import CFC from '../../types/cfc'
import useStyles from './styles'

const LoadingPage: CFC = () => {
  const styles = useStyles()
  useTitle('Loading...')

  return <div>Loading page...</div>
}

export default LoadingPage
