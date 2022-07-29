// eslint-disable-next-line
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ChakraProvider } from '@chakra-ui/react'

import { Card, CardBody, CardTitle } from './Card'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = ({ children }) => (
  <ChakraProvider>
    <Card>{children}</Card>
  </ChakraProvider>
)

export const Hamburger = Template.bind({})

Hamburger.args = {
  children: (
    <>
      <CardTitle title="これはタイトル" />
      <CardBody>内容</CardBody>
    </>
  ),
}
