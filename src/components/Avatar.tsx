import { Avatar as ChakraAvatar } from '@chakra-ui/react'
import { VFC } from 'react'

type AvatarProps = {
  src: string
  name: string
}

export const Avatar: VFC<AvatarProps> = ({ src, name }) => (
  <ChakraAvatar src={src} name={name} width="28px" height="28px" />
)
