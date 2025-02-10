import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Navigation() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography 
            variant="h6" 
            component={RouterLink} 
            to="/" 
            sx={{ textDecoration: 'none', color: 'inherit' }}
          >
            Mike Khor
          </Typography>
          <div>
            <Button component={RouterLink} to="/" color="inherit">
              Machine Learning
            </Button>
            <Button component={RouterLink} to="/acappella" color="inherit">
              A Cappella
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;