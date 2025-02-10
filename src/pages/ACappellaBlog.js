import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

function ACappellaBlog() {
  const posts = [
    {
      title: 'My Journey in A Cappella',
      date: '2025-02-10',
      summary: 'How I discovered my passion for a cappella singing and my experiences in various groups.',
    },
    {
      title: 'A Cappella Arrangement Techniques',
      date: '2025-02-08',
      summary: 'Understanding the art of arranging music for a cappella groups, from basics to advanced techniques.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        A Cappella Adventures
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Stories and experiences from my a cappella singing journey
      </Typography>
      
      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <Grid item xs={12} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
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