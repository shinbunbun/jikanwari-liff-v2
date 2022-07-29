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
    minWidth="24px"
    width="24px"
    height="24px"
    padding="0px"
  >
    {icon}
  </Button>
)
