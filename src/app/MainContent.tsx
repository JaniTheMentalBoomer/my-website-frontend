import { Box } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const MainContent = ({ children }: Props) => {
  return (
    <Box width={'100vw'} minHeight={'100vh'}>
      {children}
    </Box>
  )
}

export default MainContent
