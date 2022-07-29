import { VStack } from '@chakra-ui/react'
import { VFC } from 'react'

type PageMainProps = {
  children: React.ReactNode
}

export const PageMain: VFC<PageMainProps> = ({ children }) => (
  <VStack paddingX="16px">
    <VStack spacing="12px" width="100%">
      {children}
    </VStack>
  </VStack>
)
