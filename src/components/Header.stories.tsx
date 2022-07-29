// eslint-disable-next-line
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ChakraProvider, HStack } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import { Header } from './Header'

import { IconButton } from './IconButton'
import { Logo } from './Logo'
import { Avatar } from './Avatar'

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => {
  const userIcon = (
    <Avatar
      src="https://avatars.githubusercontent.com/u/83107074?v=4"
      name="eraser5th"
    />
  )

  return (
    <ChakraProvider>
      <Header>
        <HStack justifyContent="space-between" width="100%" paddingX="16px">
          <HStack spacing="24px">
            <IconButton icon={<HamburgerIcon />} />
            <Logo />
          </HStack>
          <IconButton icon={userIcon} />
        </HStack>
      </Header>
    </ChakraProvider>
  )
}

export const Hamburger = Template.bind({})

Hamburger.args = {}
