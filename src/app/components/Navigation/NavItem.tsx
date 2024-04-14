import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { UrlObject } from 'url'

interface Props {
  label: string
  href: string | UrlObject
  isFullWidth?: boolean
  closeMenu?: () => void
}

const NavItem = ({ label, href, closeMenu }: Props) => {
  return (
    <Link href={href} passHref>
      <Flex flexWrap={'wrap'}>
        <Button
          variant="ghost"
          aria-label={label}
          py={1}
          px={2}
          onClick={closeMenu}
        >
          {label}
        </Button>
      </Flex>
    </Link>
  )
}

export default NavItem
