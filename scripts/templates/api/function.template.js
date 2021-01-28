const { kebapToCamel, kebapToHeading } = require('../../helpers/convert-case')

const contentTemplate = ({
  name,
}) => `import callableFunction from '../../helpers/callable-functions'

const ${kebapToCamel(name)} = callableFunction<'${kebapToCamel(
  name
)}'>(async () => {
  return 'Hello from ${kebapToHeading(name)}!'
})

export default ${kebapToCamel(name)}

`

const nameTemplate = ({ name }) => `${name}.ts`

module.exports = { contentTemplate, nameTemplate }
