const { kebapToCamel } = require('../../helpers/convert-case')

const contentTemplate = ({ name }, old) => {
  const insertLine = `  ${kebapToCamel(name)}: ApiFunction<null, string>`

  return old
    .split('\n')
    .map((line, i, target) => {
      if (line.includes('>') && target[i + 1] && target[i + 1].includes('}')) {
        return [line, insertLine]
      }

      return line
    })
    .flat()
    .join('\n')
}

const nameTemplate = () => `api.d.ts`

const options = {
  inject: true,
  basePathOverwrite: 'definitions/api',
}

module.exports = { contentTemplate, nameTemplate, options }
