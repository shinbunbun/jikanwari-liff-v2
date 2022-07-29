// eslint-disable-next-line
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box, ChakraProvider } from '@chakra-ui/react'

import { PageMain } from './PageMain'
import Card, { CardBody, CardTitle } from './Card'
import { Button } from './Button'

export default {
  title: 'Components/PageMain',
  component: PageMain,
  argTypes: {},
} as ComponentMeta<typeof PageMain>

const Template: ComponentStory<typeof PageMain> = ({ children }) => (
  <ChakraProvider>
    <h1>スマホサイズ(320px)</h1>
    <Box
      width="320px"
      border="1px"
      borderColor="gray.400"
      borderRadius="8px"
      paddingY="8px"
    >
      <PageMain>{children}</PageMain>
    </Box>
  </ChakraProvider>
)

export const Mobile = Template.bind({})

Mobile.args = {
  children: (
    <>
      <Card>
        <CardTitle title="備考" />
        <CardBody>体操着</CardBody>
      </Card>
      <Button label="編集" />
    </>
  ),
}
