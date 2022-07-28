import { VFC } from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'

type ButtonProps = {
  label: string
  onClick?: () => void
}

export const Button: VFC<ButtonProps> = ({ label, onClick }) => (
  <ChakraButton
    onClick={onClick}
    bg="blue.500"
    color="white"
    fontSize="md"
    fontWeight="bold"
    _hover={{ bg: 'blue.600' }}
    _active={{ bg: 'blue.700' }}
    width="100%"
    height="40px"
  >
    {label}
  </ChakraButton>
)
