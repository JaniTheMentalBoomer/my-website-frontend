'use client'

import { useMediaQuery } from '@chakra-ui/react'
import NavigationBar from './NavigationBar'
import Sidebar from './Sidebar'

const Navigation = () => {
  const [isDesktop] = useMediaQuery('(min-width: 1200px)')

  return <>{isDesktop ? <NavigationBar /> : <Sidebar />}</>
}

export default Navigation
