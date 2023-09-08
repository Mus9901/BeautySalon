// https://mui.com/material-ui/customization/theming/

import { createTheme } from '@mui/material'
import { rem } from '@/utils/pxToRem'

export default createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#fff'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'inherit',
          '&:hover': {
            color: 'inherit'
          }
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          maxWidth: 'none'
        }
      }
    }
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: rem(16),
        paddingRight: rem(16),
        "@media (min-width:1440px)": {
          maxWidth: "1190px",
          width: "100%",
        },
        "@media (min-width:1200px)": {
          paddingLeft: rem(16),
          paddingRight: rem(16),
        },
      },
    },
  },
})
