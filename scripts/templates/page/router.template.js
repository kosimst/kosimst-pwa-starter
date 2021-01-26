const { kebapToPascal } = require('../../helpers/convert-case')

const contentTemplate = ({ name }, old) => {
  const lazyLine = `const ${kebapToPascal(
    name
  )}Page = lazy(() => import('./${name}/${name}'))`
  const routeLine = `  '/${name}': () => <${kebapToPascal(name)}Page />,`

  return old
    .split('\n')
    .map((line, i, target) => {
      if (target[i + 2] && target[i + 2].includes('const routes = ')) {
        return [line, lazyLine]
      }

      if (
        target[i + 1] &&
        target[i + 1].includes('}') &&
        line.includes('/>,')
      ) {
        return [line, routeLine]
      }

      return line
    })
    .flat()
    .join('\n')
}

const nameTemplate = () => `pages.tsx`

const options = {
  inject: true,
  basePathOverwrite: 'src/pages',
}

module.exports = { contentTemplate, nameTemplate, options }
