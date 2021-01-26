import HelloWorld from '../../components/hello-world'
import useTitle from '../../hooks/title'
import CFC from '../../types/cfc'
import useStyles from './styles'

const HomePage: CFC = () => {
  const styles = useStyles()
  useTitle('Home')

  return (
    <div>
      <HelloWorld />
    </div>
  )
}

export default HomePage
