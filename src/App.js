import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navigation from "./components/Navigation";
import MLBlog from "./pages/MLBlog.tsx";
import ACappellaBlog from "./pages/ACappellaBlog.tsx";
import LandingPage from "./pages/LandingPage.tsx";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f5f5f5",
    },
    primary: {
      main: "#757575",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#757575",
          "&:hover": {
            backgroundColor: "#616161",
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
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/machinelearning" element={<MLBlog />} />
        <Route path="/machinelearning/:postId" element={<MLBlog showPost />} />
        <Route path="/acappella" element={<ACappellaBlog />} />
        <Route path="/acappella/:postId" element={<ACappellaBlog showPost />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
