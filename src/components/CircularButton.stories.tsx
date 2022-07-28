// eslint-disable-next-line
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ChakraProvider } from '@chakra-ui/react'

import { CircularButton } from './CircularButton'

export default {
  title: 'Components/CircularButton',
  component: CircularButton,
  argTypes: {
    label: { control: 'text' },
    theme: { control: { type: 'select', options: ['blue', 'white'] } },
  },
} as ComponentMeta<typeof CircularButton>

const Template: ComponentStory<typeof CircularButton> = ({ label, theme }) => (
  <ChakraProvider>
    <CircularButton label={label} theme={theme} />
  </ChakraProvider>
)

export const Blue = Template.bind({})

Blue.args = {
  label: '水',
  theme: 'blue',
}

export const White = Template.bind({})

White.args = {
  label: '火',
  theme: 'white',
}
