const { kebapToPascal, kebapToHeading } = require('../../helpers/convert-case')

const contentTemplate = ({ name }) => `import useTitle from '../../hooks/title'
import CFC from '../../types/cfc'
import useStyles from './styles'

const ${kebapToPascal(name)}Page: CFC = () => {
  const styles = useStyles()
  useTitle('${kebapToHeading(name)}')

  return (
    <div>${kebapToHeading(name)}</div>
  )
}

export default ${kebapToPascal(name)}Page
`

const nameTemplate = ({ name }) => `${name}.tsx`

const options = {}

module.exports = { contentTemplate, nameTemplate, options }
