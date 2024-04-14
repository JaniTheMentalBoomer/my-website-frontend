import { Flex, Stack } from '@chakra-ui/react'
import Providers from './Providers'
import Navigation from './components/Navigation/Navigation'
import MainContent from './MainContent'

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <Stack direction={'column'}>
            <Flex direction={'row'} flexWrap={'wrap'}>
              <Navigation />
              <MainContent>{children}</MainContent>
            </Flex>
          </Stack>
        </Providers>
      </body>
    </html>
  )
}
