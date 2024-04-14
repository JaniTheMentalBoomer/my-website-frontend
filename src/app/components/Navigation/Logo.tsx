'use client'
import { AspectRatio, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" passHref>
      <Flex maxW={'300px'} maxH={'80px'} alignItems={'center'}>
        <Image
          src="/images/MBI-logo-transparent.png"
          alt="Logo"
          width={80}
          height={80}
          style={{
            objectFit: 'contain',
            cursor: 'pointer',
            position: 'relative',
          }}
        />
        <Heading fontSize={'1.5rem'}>{`Mental Boomer Industries`}</Heading>
      </Flex>
    </Link>
  )
}

export default Logo
