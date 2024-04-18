import { Flex } from '@chakra-ui/react'
import NavItem from './NavItem'
import Logo from './Logo'

const DesktopNav = () => {
  return (
    <Flex
      w="100vw"
      bg="navigation.main"
      pos="static"
      p={2}
      flexDir="row"
      flexWrap={'wrap'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Flex flexBasis={'25%'}>
        <Logo />
      </Flex>
      <Flex justifyContent={'space-around'} flexBasis={'70%'}>
        <NavItem href={'/'} label="Home" />
        <NavItem href={'/projects'} label="My Projects" />
        <NavItem href={'/gallery'} label="Gallery" />
      </Flex>
    </Flex>
  )
}

export default DesktopNav
