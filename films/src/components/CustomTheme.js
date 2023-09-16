import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';


const fonts = {
  heading: "'Shrikhand', sans-serif",
  body: "'Raleway', sans-serif",
};

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
    })
  },
  semanticTokens: {
    colors: {
      brand: '#DC6738',
      primaryDark: '#6C331C',
      primaryBackground: '#F7D9AE',
      secondaryBackground: 'brand',
    }
  },
  fonts
})