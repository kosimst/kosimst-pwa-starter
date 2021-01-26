import useTitle from '../../hooks/title'
import CFC from '../../types/cfc'
import useStyles from './styles'

const NotFoundPage: CFC = () => {
  const styles = useStyles()
  useTitle('Not found')

  return <div>This page does not exist.</div>
}

export default NotFoundPage
