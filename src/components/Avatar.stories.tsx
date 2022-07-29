// eslint-disable-next-line
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ChakraProvider } from '@chakra-ui/react'

import { Avatar } from './Avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    src: { control: 'text' },
    name: { control: 'text' },
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = ({ src, name }) => (
  <ChakraProvider>
    <Avatar src={src} name={name} />
  </ChakraProvider>
)

export const Hamburger = Template.bind({})

Hamburger.args = {
  src: 'https://avatars.githubusercontent.com/u/83107074?v=4',
  name: 'eraser5th',
}
