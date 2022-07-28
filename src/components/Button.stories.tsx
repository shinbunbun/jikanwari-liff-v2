// eslint-disable-next-line
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ChakraProvider } from '@chakra-ui/react'

import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = ({ label }) => (
  <ChakraProvider>
    <Button label={label} />
  </ChakraProvider>
)

export const Example = Template.bind({})

Example.args = {
  label: 'Button',
}
