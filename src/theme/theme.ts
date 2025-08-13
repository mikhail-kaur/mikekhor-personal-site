import { createTheme } from '@mui/material/styles';

// Augment the theme to include custom colors
declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      folly: {
        main: string;
        light: string;
        dark: string;
      };
      ultraViolet: {
        main: string;
        light: string;
        dark: string;
      };
      lightSkyBlue: {
        main: string;
        light: string;
        dark: string;
      };
      frenchGray: {
        main: string;
        light: string;
        dark: string;
      };
    };
  }

  interface PaletteOptions {
    custom?: {
      folly?: {
        main: string;
        light: string;
        dark: string;
      };
      ultraViolet?: {
        main: string;
        light: string;
        dark: string;
      };
      lightSkyBlue?: {
        main: string;
        light: string;
        dark: string;
      };
      frenchGray?: {
        main: string;
        light: string;
        dark: string;
      };
    };
  }
}

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f3f5f7', // french_gray.light for soft background
    },
    primary: {
      main: '#6c6ea0', // ultra_violet for primary actions
    },
    secondary: {
      main: '#66c7f4', // light_sky_blue for secondary elements
    },
    error: {
      main: '#ff1053', // folly for errors/warnings
    },
    text: {
      primary: '#212831', // french_gray.100 for main text
      secondary: '#6c6ea0', // ultra_violet for secondary text
    },
    custom: {
      folly: {
        main: '#ff1053',
        light: '#ff6f98',
        dark: '#d8003d',
      },
      ultraViolet: {
        main: '#6c6ea0',
        light: '#9a9cc8',
        dark: '#555783',
      },
      lightSkyBlue: {
        main: '#66c7f4',
        light: '#a3def9',
        dark: '#26b0f0',
      },
      frenchGray: {
        main: '#c1cad6',
        light: '#f3f5f7',
        dark: '#91a1b6',
      },
    },
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
    h1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
    },
    h3: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
    },
    h4: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
    },
    h5: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 300,
    },
    h6: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 600,
    },
    body1: {
      fontFamily: "'Lato', sans-serif",
    },
    body2: {
      fontFamily: "'Lato', sans-serif",
    },
    caption: {
      fontFamily: "'Lato', sans-serif",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#6c6ea0', // ultra_violet
          '&:hover': {
            backgroundColor: '#555783', // ultra_violet dark
          },
        },
      },
    },
  },
});