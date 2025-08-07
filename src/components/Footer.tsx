import React from 'react';
import { Box, Stack, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{ 
        py: 4, 
        backgroundColor: '#c1cad6',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 'auto' // Push footer to bottom when used in flex container
      }}
    >
      <Stack direction="row" spacing={3}>
        <IconButton
          component="a"
          href="https://github.com/mike-khor"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          sx={{
            color: '#212831',
            '&:hover': {
              color: '#6c6ea0',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.2s ease',
          }}
        >
          <GitHubIcon sx={{ fontSize: 28 }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://linkedin.com/in/MichaelEngHoeKhor"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          sx={{
            color: '#212831',
            '&:hover': {
              color: '#6c6ea0',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.2s ease',
          }}
        >
          <LinkedInIcon sx={{ fontSize: 28 }} />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Footer;