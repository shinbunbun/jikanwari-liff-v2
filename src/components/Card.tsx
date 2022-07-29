import { VFC } from 'react'
import { Box } from '@chakra-ui/react'

type CardProps = {
  children: React.ReactNode
}

export const Card: VFC<CardProps> = ({ children }) => (
  <Box
    paddingX="12px"
    paddingY="8px"
    width="100%"
    border="1px"
    borderColor="gray.200"
    borderRadius="8px"
  >
    {children}
  </Box>
)

type CardTitleProps = {
  title: string
}

export const CardTitle: VFC<CardTitleProps> = ({ title }) => (
  <Box
    fontSize="md"
    fontWeight=""
    marginBottom="8px"
    paddingBottom="4px"
    color="gray"
    borderBottom="1px"
    borderColor="gray.200"
  >
    {title}
  </Box>
)

type CardBody = {
  children: React.ReactNode
}

export const CardBody: VFC<CardBody> = ({ children }) => <Box>{children}</Box>

export default Card
