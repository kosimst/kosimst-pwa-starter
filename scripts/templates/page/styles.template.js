const contentTemplate = () => `import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({}))

export default useStyles
`

const nameTemplate = () => `styles.ts`

const options = {}

module.exports = { contentTemplate, nameTemplate, options }
