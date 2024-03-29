import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';

export const CustomTheme = extendTheme({
  styles: {
    global: ({
      'html, body': {
        backgroundColor: mode('primaryBackground'),
        color: mode('primaryDark', 'white'),
        height: '100%',
        scrollbarColor: '#a5a5a5 transparent' /* thumb and track color */,
        scrollbarWidth: 'thin',
      }
    }),
  },
  semanticTokens: {
    colors: {
      brand: {
        'orange': '#DC6738',
        'brown': '#A14C2A',
        'light-grey': '#DCD6B5',
        'beige': '#FFEDD2'
      },
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
  },
  textStyles: {
    "h1": {
      fontSize: "4xl",
      textTransform: "uppercase"
    },
    "h2": {
      fontSize: "3xl",
    },
    "h3": {
      fontSize: "2xl",
      fontWeight: "300",
    },
  },
  components: {
    Text: {
      variants: {
        label: {
          mt: "30px"
        }
      }
    },
    Link: {
      variants: {
        orange: {
          fontWeight: 'bold'
        }
      }
    },
    Button: {
      baseStyle: {
        borderRadius: '30px',
        width: "min-content",
        transition: 'all 0.2s ease-in-out',
        _hover: {
          transform: 'scale(1.02)'
        }
      },
      variants: {
        primary: {
          backgroundColor: "brand.orange",
          color: "white",
        },
        secondary: {
          backgroundColor: "brand.brown",
          color: "white",
        },
        tertiary: {
          backgroundColor: "brand.light-grey"
        },
        primaryForm: {
          backgroundColor: "brand.orange",
          color: "white",
          mt: "30px"
        },
        secondaryForm: {
          backgroundColor: "brand.brown",
          color: "white",
          mt: "30px"
        }
      }
    },
    Input: {
      baseStyle: {
        field: {
          borderRadius: '30px',
          backgroundColor: 'white',
          mt: '30px',
          p: '1.5rem 1.5rem',
          fontWeight: "900",
          width: '30rem',
          textAlign: 'center',
          color: "black",
          _placeholder: {
            color: "brand.light-grey"
          }
        },
      },
      variants: {
        filled: {
          field: {
            borderColor: 'brand.orange',
            borderWidth: '7px',
            background: 'white',
            _hover: {
              borderColor: "brand.brown",
              backgroundColor: 'white',
            },
            _focusVisible: {
              borderColor: "brand.brown",
              backgroundColor: 'white',
            },
          },
        },
      },
      sizes: {},
      defaultProps: {
        variant: null
      }
    },
    Select: {
      baseStyle: {
        field: {
          borderRadius: '30px',
          mt: '30px',
          ml: '10px',
          height: '60px',
          fontWeight: "900",
          width: '10rem',
          textAlign: 'center',
          color: "brand.light-grey",
        },
        icon: {
          mt: '15px'
        }
      },
      variants: {
        filled: {
          field: {
            borderColor: 'brand.orange',
            borderWidth: '7px',
            background: 'white',
            _hover: {
              borderColor: "brand.brown",
              backgroundColor: 'white',
            },
            _focusVisible: {
              borderColor: "brand.brown",
              backgroundColor: 'white',
            },
          },
        },
      },
      sizes: {},
      defaultProps: {
        variant: null
      }
    },
    Checkbox: {
      baseStyle: {
        control: {
          borderRadius: '10px',
          borderColor: 'brand.orange',
          borderWidth: '7px',
          padding: '15px'
        },
        label: {
          color: 'brand.orange',
          fontWeight: 'bold'
        },
        icon: {
          width: '2rem'
        },
        iconColor: 'brand.orange'
      },
      variants: {
        empty: {
          control: {
            borderColor: 'brand.orange',
            borderWidth: '7px',
            _focusVisible: {
              borderColor: "brand.brown",
              backgroundColor: 'white',
            },
            _hover: {
              borderColor: "brand.brown",
            },
            _checked: {
              bg: 'brand.orange',
              borderColor: 'brand.orange',
              _hover: {
                bg: 'brand.orange',
                borderColor: 'brand.orange'
              },
            },
          },
        },
      },
      sizes: {},
      defaultProps: {
        variant: null
      }
    },
    Textarea: {
      baseStyle: {
        borderRadius: '30px',
        backgroundColor: 'white',
        mt: '30px',
        p: '1.5rem 1.5rem',
        fontWeight: "900",
        width: '30rem',
        textAlign: 'left',
        color: "black",
        resize: 'resize',
        _placeholder: {
          color: "brand.light-grey",
          textAlign: "center"
        }
      },
      variants: {
        filled: {
          borderColor: 'brand.orange',
          borderWidth: '7px',
          background: 'white',
          _hover: {
            borderColor: "brand.brown",
            backgroundColor: 'white',
          },
          _focusVisible: {
            borderColor: "brand.brown",
            backgroundColor: 'white',
          },
        },
      },
      sizes: {},
      defaultProps: {
        variant: null
      }
    },
    NumberInput: {
      baseStyle: {
        field: {
          borderRadius: '30px',
          backgroundColor: 'white',
          mt: '30px',
          p: '1.5rem 1.5rem',
          fontWeight: "900",
          width: '30rem',
          textAlign: 'center',
          color: "black",
          _placeholder: {
            color: "brand.light-grey"
          }
        },
      },
      variants: {
        filled: {
          field: {
            borderColor: 'brand.orange',
            borderWidth: '7px',
            background: 'white',
            _hover: {
              borderColor: "brand.brown",
              backgroundColor: 'white',
            },
            _focusVisible: {
              borderColor: "brand.brown",
              backgroundColor: 'white',
            },
          },
        },
      },
      sizes: {},
      defaultProps: {
        variant: null
      }
    },
  },
})
