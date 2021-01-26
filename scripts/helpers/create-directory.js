const { existsSync, mkdirSync } = require('fs')

const createDirectory = (directoryPath, ignoreExists = false) => {
  const alreadyExists = existsSync(directoryPath)

  if (alreadyExists && !ignoreExists) {
    throw new Error('Folder already exists.')
  } else if (alreadyExists && ignoreExists) {
    return
  }

  mkdirSync(directoryPath)
}

module.exports = createDirectory
