const kebapToCamel = (str) =>
  str
    .split('-')
    .map(
      (substr, i) =>
        `${i === 0 ? substr[0] : substr[0].toUpperCase()}${substr
          .split('')
          .slice(1)
          .join('')}`
    )
    .join('')

const kebapToPascal = (str) =>
  str
    .split('-')
    .map(
      (substr) =>
        `${substr[0].toUpperCase()}${substr.split('').slice(1).join('')}`
    )
    .join('')

const kebapToHeading = (str) =>
  str
    .split('-')
    .map(
      (substr) =>
        `${substr[0].toUpperCase()}${substr.split('').slice(1).join('')}`
    )
    .join(' ')

module.exports = { kebapToCamel, kebapToPascal, kebapToHeading }
