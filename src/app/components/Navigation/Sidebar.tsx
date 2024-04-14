import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'
import NavItem from './NavItem'
import Logo from './Logo'
import React from 'react'

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleNavItemClicked = () => {
    onClose()
  }

  return (
    <Flex
      w="100vw"
      bgColor="green.100"
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
        />
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Flex
              direction={'column'}
              p={2}
              flexWrap={'wrap'}
              alignItems={'center'}
            >
              <NavItem
                href={'/'}
                label="Home"
                closeMenu={handleNavItemClicked}
              />
              <NavItem
                href={'/projects'}
                label="My Projects"
                closeMenu={handleNavItemClicked}
              />
              <NavItem
                href={'/gallery'}
                label="Gallery"
                closeMenu={handleNavItemClicked}
              />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default Sidebar
