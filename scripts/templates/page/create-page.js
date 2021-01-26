const { join } = require('path')
const createDirectory = require('../../helpers/create-directory')
const templateWriter = require('../../helpers/template-writer')

const templates = [
  require('./page.template'),
  require('./styles.template'),
  require('./router.template'),
]

const createPage = (name) => {
  const basePath = join(__dirname, '..', '..', '..', 'src', 'pages', name)

  createDirectory(basePath)

  const writeTemplate = templateWriter(basePath)

  for (const template of templates) {
    writeTemplate(template, { name })
  }
}

module.exports = createPage
