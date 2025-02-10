import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from './components/Navigation';
import MLBlog from './pages/MLBlog';
import ACappellaBlog from './pages/ACappellaBlog';
import BlogPost from './components/BlogPost';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f5f5',
    },
    primary: {
      main: '#2196f3',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <Routes>
        <Route path="/" element={<MLBlog />} />
        <Route path="/ml/:postId" element={<MLBlog showPost />} />
        <Route path="/acappella" element={<ACappellaBlog />} />
        <Route path="/acappella/:postId" element={<ACappellaBlog showPost />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;