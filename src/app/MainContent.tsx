import { Box } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const MainContent = ({ children }: Props) => {
  return (
    <Box px={4} width={'100vw'} tabIndex={-1}>
      {children}
    </Box>
  )
}

export default MainContent
