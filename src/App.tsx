import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MLBlog from "./pages/MLBlog";
import ACappellaBlog from "./pages/ACappellaBlog";
import LandingPage from "./pages/LandingPage";
import { theme } from "./theme/theme";


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
            <Route path="/aiml" element={<MLBlog />} />
            <Route
              path="/aiml/:postId"
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
