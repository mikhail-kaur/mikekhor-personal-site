import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

function MLBlog() {
  const posts = [
    {
      title: 'Getting Started with Deep Learning',
      date: '2025-02-10',
      summary: 'An introduction to deep learning concepts and practical applications in modern AI systems.',
    },
    {
      title: 'Natural Language Processing Projects',
      date: '2025-02-09',
      summary: 'Exploring various NLP projects and their impact on AI applications.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Machine Learning Journey
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Exploring the fascinating world of artificial intelligence and machine learning
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

export default MLBlog;