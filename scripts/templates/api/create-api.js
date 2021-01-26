const { join } = require('path')
const createDirectory = require('../../helpers/create-directory')
const templateWriter = require('../../helpers/template-writer')

const templates = [
  require('./api-def.template'),
  require('./function-export.template'),
  require('./function.template'),
  require('./index-export.template'),
]

const createApi = (name) => {
  const basePath = join(
    __dirname,
    '..',
    '..',
    '..',
    'functions',
    'src',
    'functions',
    name
  )

  createDirectory(basePath)

  const writeTemplate = templateWriter(basePath)

  for (const template of templates) {
    writeTemplate(template, { name })
  }
}

module.exports = createApi
