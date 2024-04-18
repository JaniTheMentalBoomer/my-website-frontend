'use client'

import { useMediaQuery } from '@chakra-ui/react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Navigation = () => {
  const [isDesktop] = useMediaQuery('(min-width: 1200px)')

  return <>{isDesktop ? <DesktopNav /> : <MobileNav />}</>
}

export default Navigation
