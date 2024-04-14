'use client'

import { CSSReset, ChakraProvider, ThemeProvider } from '@chakra-ui/react'
import theme from './styles/theme'

interface Props {
  children: React.ReactNode
}

export default function Providers({ children }: Props) {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        {children}
      </ThemeProvider>
    </ChakraProvider>
  )
}
