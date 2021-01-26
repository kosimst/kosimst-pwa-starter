const { join } = require('path')
const createDirectory = require('../../helpers/create-directory')
const templateWriter = require('../../helpers/template-writer')

const templates = [
  require('./component.template'),
  require('./component-index.template'),
  require('./pure-component.template'),
  require('./styles.template'),
  require('./stories.template'),
]

const createComponent = (name) => {
  const basePath = join(__dirname, '..', '..', '..', 'src', 'components', name)

  createDirectory(basePath)

  const writeTemplate = templateWriter(basePath)

  for (const template of templates) {
    writeTemplate(template, { name })
  }
}

module.exports = createComponent
