import { VFC } from 'react'
import { Image } from '@chakra-ui/react'
import logo from '../assets/logo.svg'

export const Logo: VFC = () => <Image src={logo} alt="logo" height="24px" />
