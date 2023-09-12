import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';


const stylesControls = {
  // borderRadius: '25px',
  border: 'solid 2px transparent',
  color: 'primaryDark',
  padding: '0 20px',
  _placeholder: {
    color: 'rgba(59, 72, 81, 0.6)',
  },
};

const stylesControlsForLightBg = {
  backgroundColor: 'rgba(221, 221, 221, 0.5)',
  _hover: {
    border: 'solid 2px #3B4851',
    backgroundColor: 'rgba(221, 221, 221, 0.5)',
    color: 'secondaryDark',
  },
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
  }
})
