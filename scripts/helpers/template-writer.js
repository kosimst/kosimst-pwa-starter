const { existsSync, writeFileSync, readFileSync } = require('fs')
const { join } = require('path')

const templateWriter = (basePath) => (
  {
    nameTemplate,
    contentTemplate,
    options: { overwrite = false, inject = false, basePathOverwrite } = {},
  },
  props
) => {
  const name = nameTemplate(props)
  const filePath = join(
    (typeof basePathOverwrite === 'function'
      ? basePathOverwrite()
      : basePathOverwrite) || basePath,
    name
  )

  const doesAlreadyExist = existsSync(filePath)

  if (!overwrite && !inject && doesAlreadyExist) {
    throw new Error('File already exists.')
  }

  const content = inject
    ? contentTemplate(
        props,
        doesAlreadyExist ? readFileSync(filePath).toString() : null
      )
    : contentTemplate(props)

  writeFileSync(filePath, content)
}

module.exports = templateWriter
