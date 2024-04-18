/* theme.ts */
import { StyleFunctionProps, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  breakpoints: ['30em', '48em', '62em', '80em'],
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  colors: {
    navigation: {
      main: '#718096',
      secondary: '#A0AEC0',
    },
    primary: {
      main: 'white',
      secondary: 'black',
    },
  },
  components: {
    Container: {},
    Heading: {
      baseStyle: {
        color: 'primary.main',
      },
      variants: {
        textWithShadows: {
          color: 'primary.main',
          textShadow: '#558ABB 4px 8px 10px',
        },
        darkText: {
          color: 'primary.secondary',
        },
      },
    },
    Text: {
      baseStyle: {
        fontSize: '20px',
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
        color: 'primary.main',
      },
    },
    Button: {
      variants: {
        whiteGhost: {
          border: '2px solid black',
          bg: 'white',
          color: 'black',
          boxShadow: '0 0 2px 2px #efdfde',
          _hover: {
            transform: 'scale(1.1)',
            bg: '#CBD5E0',
          },
          _focus: {
            transform: 'scale(1.1)',
            bg: '#CBD5E0',
          },
          _active: {
            bg: '#CBD5E0',
          },
        },
      },
    },
    // Button: {
    //   // 1. We can update the base styles
    //   baseStyle: {
    //     fontWeight: 'bold', // Normally, it is "semibold"
    //   },
    //   // 2. We can add a new button size or extend existing
    //   sizes: {
    //     xl: {
    //       h: '56px',
    //       fontSize: 'lg',
    //       px: '32px',
    //     },
    //   },
    //   // 3. We can add a new visual variant
    //   variants: {
    //     'with-shadow': {
    //       bg: 'red.400',
    //       boxShadow: '0 0 2px 2px #efdfde',
    //     },
    //     // 4. We can override existing variants
    //     solid: (props: StyleFunctionProps) => ({
    //       bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
    //     }),
    //     // 5. We can add responsive variants
    //     sm: {
    //       bg: 'teal.500',
    //       fontSize: 'md',
    //     },
    //   },
    //   // 6. We can overwrite defaultProps
    //   defaultProps: {
    //     size: 'lg', // default is md
    //     variant: 'sm', // default is solid
    //     colorScheme: 'green', // default is gray
    //   },
    // },
  },
})

export default theme
