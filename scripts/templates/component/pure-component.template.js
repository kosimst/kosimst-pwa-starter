const { kebapToPascal, kebapToHeading } = require('../../helpers/convert-case')

const contentTemplate = ({ name }) => `import clsx from 'clsx'
import CFC from '../../types/cfc'
import useStyles from './styles'

const ${kebapToPascal(name)}Pure: CFC<${kebapToPascal(name)}PureProps> = ({
  className,
  style,
}) => {
  const styles = useStyles()

  return (<div className={clsx(className)} style={style}>${kebapToHeading(
    name
  )} Component</div>)
}

export interface ${kebapToPascal(name)}PureProps {}

export default ${kebapToPascal(name)}Pure
`

const nameTemplate = ({ name }) => `${name}.pure.tsx`

module.exports = {
  contentTemplate,
  nameTemplate,
}
