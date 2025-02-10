import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const MLBlog = () => {
  const posts = [
    {
      title: 'Getting Started with Deep Learning',
      date: '2025-02-10',
      subtitle: 'A beginner\'s guide to neural networks',
      content: `
# Getting Started with Deep Learning

Deep learning has revolutionized the field of artificial intelligence. In this post, we'll explore the fundamentals and get you started with your first neural network.

## What is Deep Learning?

Deep learning is a subset of machine learning that uses neural networks with multiple layers (deep neural networks) to learn from data.
      `,
      preview_image: null
    },
    {
      title: 'Natural Language Processing Projects',
      date: '2025-02-09',
      subtitle: 'Exploring NLP applications',
      content: `
# Natural Language Processing Projects

NLP is one of the most exciting fields in machine learning. Let's explore some practical applications and projects.

## Getting Started with NLP

Natural Language Processing combines linguistics and machine learning to help computers understand human language.
      `,
      preview_image: null
    }
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
                  {new Date(post.date).toLocaleDateString()}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  {post.subtitle}
                </Typography>
                <div className="markdown-preview">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MLBlog;