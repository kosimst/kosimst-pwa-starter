const { kebapToPascal } = require('../../helpers/convert-case')

const contentTemplate = ({
  name,
}) => `import { Story, Meta } from '@storybook/react/types-6-0'

import ${kebapToPascal(name)}Pure, { ${kebapToPascal(
  name
)}PureProps } from './${name}.pure'

export default {
  title: '${kebapToPascal(name)}Pure',
  component: ${kebapToPascal(name)}Pure,
  argTypes: {},
} as Meta

const Template: Story<${kebapToPascal(name)}PureProps> = ({ ...args }) => (
  <${kebapToPascal(name)}Pure
    {...args}
  />
)

export const Default = Template.bind({})
Default.args = {}
`

const nameTemplate = ({ name }) => `${name}.stories.tsx`

module.exports = {
  contentTemplate,
  nameTemplate,
}
