// eslint-disable-next-line
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ChakraProvider } from '@chakra-ui/react'

import { HomePage } from './HomePage'
import { LiffProvider } from '../provider/LiffProvider'

export default {
  title: 'Components/HomePage',
  component: HomePage,
  argTypes: {},
} as ComponentMeta<typeof HomePage>

const Template: ComponentStory<typeof HomePage> = () => (
  <ChakraProvider>
    <LiffProvider mock liffId="aaa">
      <HomePage />
    </LiffProvider>
  </ChakraProvider>
)

export const Hamburger = Template.bind({})

Hamburger.args = {}
