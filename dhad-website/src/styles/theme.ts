import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction:'rtl',
  palette: {
    primary: {
      main: '#428f9a',
      light: '#6abbc6',
      dark: '#2b6971',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ef8e0b',
      light: '#d6b278',
      dark: '#8c6930',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f7f7f4',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e2524',
      secondary: '#5a6369',
    },
  },
  typography: {
    fontFamily: "'Cairo', 'League Spartan', sans-serif",
    h1: {
      fontFamily: "'League Spartan', sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'League Spartan', sans-serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'League Spartan', sans-serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'League Spartan', sans-serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "'League Spartan', sans-serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "'Cairo', sans-serif",
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
    styleOverrides: {
      ':root': {
        fontFamily: "'Cairo', sans-serif",
        direction: 'rtl',
      },
    },
  },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 25px',
          transition: 'all 0.3s ease',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#2b6971',
          },
        },
        outlinedPrimary: {
          borderWidth: 2,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
        },
      },
    },
   
  },
});

export default theme;
