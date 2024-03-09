'use client'

import { CSSReset, ChakraProvider, ThemeProvider } from '@chakra-ui/react'
import theme from './styles/theme'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        {children}
      </ThemeProvider>
    </ChakraProvider>
  )
}
