import { Story, Meta } from '@storybook/react/types-6-0'

import HelloWorldPure, { HelloWorldPureProps } from './hello-world.pure'

export default {
  title: 'HelloWorldPure',
  component: HelloWorldPure,
  argTypes: {
    date: { control: 'date' },
    dateFormat: { control: { type: 'select', options: ['date', 'time'] } },
  },
} as Meta

const Template: Story<HelloWorldPureProps> = ({ date, ...args }) => (
  <HelloWorldPure
    {...args}
    date={typeof date === 'number' ? new Date(date) : date}
  />
)

export const Default = Template.bind({})
Default.args = {
  date: new Date(),
  dateFormat: 'date',
  greeting: 'Hello world!',
  loading: false,
}
