import { Box, Container, Heading } from '@chakra-ui/react'

const LandingPage = () => {
  return (
    <Container bg="blue.600" centerContent maxWidth={'100%'}>
      <Box padding={4}>
        <Heading as="h1" noOfLines={1}>
          Front Page
        </Heading>
      </Box>
    </Container>
  )
}

export default LandingPage
