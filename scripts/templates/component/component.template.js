const { kebapToPascal } = require('../../helpers/convert-case')

const contentTemplate = ({ name }) => `import CFC from '../../types/cfc'
import ${kebapToPascal(name)}Pure from './${name}.pure'

const ${kebapToPascal(name)}: CFC<${kebapToPascal(
  name
)}Props> = ({ className, style }) => {

  return (
    <${kebapToPascal(name)}Pure
      className={className}
      style={style}
    />
  )
}

export interface ${kebapToPascal(name)}Props {}

export default ${kebapToPascal(name)}
`

const nameTemplate = ({ name }) => `${name}.tsx`

module.exports = {
  contentTemplate,
  nameTemplate,
}
