// eslint-disable-next-line
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ChakraProvider } from '@chakra-ui/react'

import { Logo } from './Logo'

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {},
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = () => (
  <ChakraProvider>
    <Logo />
  </ChakraProvider>
)

export const Hamburger = Template.bind({})

Hamburger.args = {}
