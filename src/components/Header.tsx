import { VFC } from 'react'
import { HStack } from '@chakra-ui/react'

type HeaderProps = {
  children: React.ReactNode
}

export const Header: VFC<HeaderProps> = ({ children }) => (
  <HStack height="52px" bg="white" boxShadow="md" width="100%">
    {children}
  </HStack>
)
