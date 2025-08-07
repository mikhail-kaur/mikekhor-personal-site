import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer.tsx";
import MLBlog from "./pages/MLBlog.tsx";
import ACappellaBlog from "./pages/ACappellaBlog.tsx";
import LandingPage from "./pages/LandingPage.tsx";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f3f5f7", // french_gray.900 for soft background
    },
    primary: {
      main: "#6c6ea0", // ultra_violet for primary actions
    },
    secondary: {
      main: "#66c7f4", // light_sky_blue for secondary elements
    },
    error: {
      main: "#ff1053", // folly for errors/warnings
    },
    text: {
      primary: "#212831", // french_gray.100 for main text
      secondary: "#6c6ea0", // ultra_violet for secondary text
    },
    // Custom colors accessible via theme.palette.custom
    custom: {
      folly: {
        main: "#ff1053",
        light: "#ff6f98",
        dark: "#d8003d",
      },
      ultraViolet: {
        main: "#305252",
        light: "#4b8080ff",
        dark: "#223a3aff",
      },
      lightSkyBlue: {
        main: "#66c7f4",
        light: "#a3def9",
        dark: "#26b0f0",
      },
      frenchGray: {
        main: "#c1cad6",
        light: "#f3f5f7",
        dark: "#91a1b6",
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
          backgroundColor: "#6c6ea0", // ultra_violet
          "&:hover": {
            backgroundColor: "#555783", // ultra_violet dark
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Navigation />
        <Box
          sx={{
            paddingTop: { xs: 0, md: "80px" }, // Add top padding for fixed nav on desktop only
            flex: 1,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/machinelearning" element={<MLBlog />} />
            <Route
              path="/machinelearning/:postId"
              element={<MLBlog showPost />}
            />
            <Route path="/acappella" element={<ACappellaBlog />} />
            <Route
              path="/acappella/:postId"
              element={<ACappellaBlog showPost />}
            />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
