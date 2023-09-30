import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';

export const CustomTheme = extendTheme({
  styles: {
    global: ({
      'html, body': {
        backgroundColor: mode('primaryBackground'),
        // color: 'primaryDark',
        color: mode('primaryDark', 'white'),
        height: '100%',
        scrollbarColor: '#a5a5a5 transparent' /* thumb and track color */,
        scrollbarWidth: 'thin',
        borderColor: 'brand',
      },
      body: {
        margin: "30px 130px"
      }
    }),
    h2: {
      fontSize: '5xl'
    }
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: '900',
        borderRadius: '30px'
      }
    }
  },
  semanticTokens: {
    colors: {
      brand: '#DC6738',
      primaryDark: '#6C331C',
      primaryBackground: '#F7D9AE',
      secondaryBackground: 'brand',
    }
  },
  fonts: {
    heading: "'Shrikhand', sans-serif",
    body: "'Raleway', sans-serif",
  },
  fontSizes: {
    "2xl": "2.5rem",
    "3xl": "3rem",
    "4xl": "4rem"
  }
})
