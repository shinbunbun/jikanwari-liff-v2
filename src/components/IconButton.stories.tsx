// eslint-disable-next-line
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ChakraProvider } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import { IconButton } from './IconButton'

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    label: { control: 'text' },
  },
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = ({ icon }) => (
  <ChakraProvider>
    <IconButton icon={icon} />
  </ChakraProvider>
)

export const Hamburger = Template.bind({})

Hamburger.args = {
  icon: <HamburgerIcon />,
}
