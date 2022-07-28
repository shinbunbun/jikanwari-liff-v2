import { VFC } from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'

type CircularButtonProps = {
  label: string
  theme: 'white' | 'blue'
  onClick?: () => void
}

export const CircularButton: VFC<CircularButtonProps> = ({
  label,
  theme,
  onClick,
}) => {
  const whiteTheme = {
    bg: 'white',
    color: 'black',
    _hover: { bg: 'gray.200' },
    _active: { bg: 'gray.300' },
    fontWeight: 'normal',
  }
  const blueTheme = {
    bg: 'blue.500',
    color: 'white',
    _hover: { bg: 'blue.600' },
    _active: { bg: 'blue.700' },
    fontWeight: 'bold',
  }
  const currentTheme = theme === 'white' ? whiteTheme : blueTheme

  return (
    <ChakraButton
      onClick={onClick}
      bg={currentTheme.bg}
      color={currentTheme.color}
      fontSize="md"
      fontWeight={currentTheme.fontWeight}
      _hover={currentTheme._hover}
      _active={currentTheme._active}
      minWidth="32px"
      width="32px"
      height="32px"
      padding="0px"
      margin="0px"
      borderRadius="50%"
    >
      {label}
    </ChakraButton>
  )
}
