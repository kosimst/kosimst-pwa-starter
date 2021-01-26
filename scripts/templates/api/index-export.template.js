const { kebapToCamel } = require('../../helpers/convert-case')

const contentTemplate = ({ name }, old) =>
  [
    ...old.split('\n').filter(Boolean),
    `export { default as ${kebapToCamel(name)} } from './functions/${name}'`,
    '',
  ].join('\n')

const nameTemplate = () => `index.ts`

const options = {
  inject: true,
  basePathOverwrite: 'functions/src',
}

module.exports = { contentTemplate, nameTemplate, options }
