import { Center, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'

const LandingPage = () => {
  return (
    <Flex flexDirection={'column'}>
      <Flex
        flexBasis={'100%'}
        sx={{
          position: 'relative',
          aspectRatio: '16 / 9',
          maxH: '100dvw',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          src={'/images/MBI-landing-image.png'}
          fill
          style={{ objectFit: 'cover' }}
          alt="Mental Boomer Industries landing image"
        />
        <Heading
          as={'h1'}
          variant={'textWithShadows'}
          size={'4xl'}
          sx={{ zIndex: 2, color: 'white', textAlign: 'center' }}
        >
          Welcome to our humble example website
        </Heading>
      </Flex>
      <Center p={4} my={4}>
        <Heading variant={'darkText'} textAlign={'center'}>
          This is a new section for new content
        </Heading>
      </Center>
    </Flex>
  )
}

export default LandingPage
