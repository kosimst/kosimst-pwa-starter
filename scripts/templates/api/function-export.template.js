const contentTemplate = ({ name }) => `export { default } from './${name}'
`

const nameTemplate = () => `index.ts`

module.exports = { contentTemplate, nameTemplate }
