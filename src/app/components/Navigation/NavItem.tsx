import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { UrlObject } from 'url'

interface Props {
  label: string
  href: string | UrlObject
  isFullWidth?: boolean
  closeMenu?: () => void
}

const NavItem = ({ label, href, isFullWidth, closeMenu }: Props) => {
  return (
    <Box
      width={isFullWidth ? '100%' : 'auto'}
      sx={{
        _hover: { bg: 'green.400' },
      }}
    >
      <Link href={href} passHref>
        <Text
          aria-label={label}
          py={2}
          px={2}
          onClick={closeMenu}
          sx={{ cursor: 'pointer' }}
        >
          {label}
        </Text>
      </Link>
    </Box>
  )
}

export default NavItem
