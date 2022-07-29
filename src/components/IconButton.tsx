import { VFC } from 'react'
import { Button } from '@chakra-ui/react'

type IconButtonProps = {
  onClick?: () => void
  icon: React.ReactElement
}

export const IconButton: VFC<IconButtonProps> = ({ onClick, icon }) => (
  <Button
    bg="transparent"
    fontSize="24px"
    onClick={onClick}
    minWidth="32px"
    width="32px"
    height="32px"
    padding="0px"
  >
    {icon}
  </Button>
)
