import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import NavItem from './NavItem'
import Logo from './Logo'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const drawerSize = useBreakpointValue({ base: 'full', md: 'xs' })

  const handleNavItemClicked = () => {
    onClose()
  }

  return (
    <Flex
      w="100vw"
      bgColor="navigation.main"
      pos="sticky"
      p={2}
      flexDir="row"
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Logo />
      <Flex>
        <IconButton
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          size="lg"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onOpen}
          variant="whiteGhost"
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        size={drawerSize}
        placement="right"
        onClose={onClose}
        closeOnEsc
        closeOnOverlayClick
      >
        <DrawerOverlay />
        <DrawerContent sx={{ bg: 'navigation.secondary' }}>
          <DrawerBody>
            <Flex direction={'row'} justify={'space-between'}>
              <Link href={'/'} passHref>
                <Button variant={'transparent'} onClick={handleNavItemClicked}>
                  <Image
                    src={'/images/MBI-logo-transparent.png'}
                    alt="MBI logo"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Button>
              </Link>
              <DrawerCloseButton size={'lg'} />
            </Flex>
            <Flex
              direction={'column'}
              p={2}
              flexWrap={'wrap'}
              alignItems={'start'}
            >
              <NavItem
                href={'/'}
                label="Front page"
                isFullWidth
                closeMenu={handleNavItemClicked}
              />
              <NavItem
                href={'/projects'}
                label="Projects"
                isFullWidth
                closeMenu={handleNavItemClicked}
              />
              <NavItem
                href={'/gallery'}
                label="Gallery"
                isFullWidth
                closeMenu={handleNavItemClicked}
              />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default MobileNav
