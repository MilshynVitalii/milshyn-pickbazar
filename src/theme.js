import {unstable_createMuiStrictModeTheme} from '@material-ui/core/styles';

let theme = unstable_createMuiStrictModeTheme({
  spacing: 15,
  breakpoints: {
    values: {
      xs: 540,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 2460,
    }
  },
  shape: {
    borderRadius: 6
  },
  palette: {
    primary: {
      main: '#009e7f'
    }
  },
  typography: {
    fontFamily: '"Lato", "Roboto", sans-serif',
    h1: {
      fontFamily: '"Poppins", "Roboto", sans-serif',
    },
    h2: {
      fontFamily: '"Poppins", "Roboto", sans-serif',
    },
    h3: {
      fontFamily: '"Poppins", "Roboto", sans-serif',
    },
    h4: {
      fontFamily: '"Poppins", "Roboto", sans-serif',
    },
    h5: {
      fontFamily: '"Poppins", "Roboto", sans-serif',
    },
    h6: {
      fontFamily: '"Poppins", "Roboto", sans-serif',
    }
  },
  props: {
    MuiFilledInput: {
      disableUnderline: true
    },
    MuiButton: {
      disableElevation: true
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          maxWidth: '2560px',
          margin: '0 auto'
        },
      },
    },
    MuiFilledInput: {
      root: {
        borderRadius: '6px',
        backgroundColor: "#f3f3f3",
        border: '1px solid transparent',
        '&$error': {
          borderColor: 'red'
        }
      },
      input: {
        padding: '15px 18px',
        fontSize: '15px'
      }
    },
    MuiLink: {
      root: {
        color: '#4286F4',
        cursor: 'pointer'
      }
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        fontSize: '14px',
        fontWeight: 700
      }
    },
    MuiAlert: {
      root: {
        position: 'fixed',
        top: '15px',
        right: '15px',
        maxWidth: '380px',
        zIndex: 2200
      }
    }
  }
});

export default theme;