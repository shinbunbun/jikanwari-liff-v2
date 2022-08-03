// eslint-disable-next-line
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ChakraProvider } from '@chakra-ui/react'

import { Form } from './Form'

export default {
  title: 'Components/Form',
  component: Form,
  argTypes: {
    label: { control: 'text' },
  },
} as ComponentMeta<typeof Form>

const Template: ComponentStory<typeof Form> = ({ labels }) => (
  <ChakraProvider>
    <Form labels={labels} />
  </ChakraProvider>
)

export const Example = Template.bind({})

Example.args = {
  labels: ['0', '1', '2', '3', '4', '5', '6', '7'],
}
