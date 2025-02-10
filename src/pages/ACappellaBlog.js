import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

function ACappellaBlog() {
  const posts = [
    {
      title: 'My Journey in A Cappella',
      date: '2025-02-10',
      summary: 'How I discovered my passion for a cappella singing and the incredible experiences it has brought to my life.',
    },
    // Add more posts here as needed
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom
        sx={{ 
          fontWeight: 600,
          mb: 4 
        }}
      >
        A Cappella Adventures
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ 
              '&:hover': {
                boxShadow: 6,
                transition: 'box-shadow 0.3s ease-in-out'
              }
            }}>
              <CardContent>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                >
                  {post.title}
                </Typography>
                <Typography 
                  variant="subtitle2" 
                  color="text.secondary" 
                  gutterBottom
                  sx={{ mb: 2 }}
                >
                  {post.date}
                </Typography>
                <Typography variant="body1">
                  {post.summary}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ACappellaBlog;