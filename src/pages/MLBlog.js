import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Card, CardContent, Grid, CardActionArea } from '@mui/material';
import BlogPost from '../components/BlogPost';

const MLBlog = ({ showPost }) => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const posts = [
    {
      id: '2025-02-10-getting-started-with-deep-learning',
      title: 'Getting Started with Deep Learning',
      date: '2025-02-10',
      subtitle: 'A beginner\'s guide to neural networks',
      content: `
# Getting Started with Deep Learning

Deep learning has revolutionized the field of artificial intelligence. In this post, we'll explore the fundamentals and get you started with your first neural network.

## What is Deep Learning?

Deep learning is a subset of machine learning that uses neural networks with multiple layers (deep neural networks) to learn from data.

![Neural Network Architecture](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMTAwIj4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxMCIgZmlsbD0iIzIxOTZmMyIvPgogIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjUwIiByPSIxMCIgZmlsbD0iIzIxOTZmMyIvPgogIDxsaW5lIHgxPSI2MCIgeTE9IjUwIiB4Mj0iMTQwIiB5Mj0iNTAiIHN0cm9rZT0iIzIxOTZmMyIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPHRleHQgeD0iMTAwIiB5PSI0MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzIxOTZmMyI+TmV1cmFsPC90ZXh0PgogIDx0ZXh0IHg9IjEwMCIgeT0iNjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMyMTk2ZjMiPkNvbm5lY3Rpb248L3RleHQ+Cjwvc3ZnPg==)

## Key Concepts

1. Neural Networks
2. Deep Learning
3. Training Data
4. Model Architecture
`,
    },
    {
      id: '2025-02-09-nlp-projects',
      title: 'Natural Language Processing Projects',
      date: '2025-02-09',
      subtitle: 'Exploring NLP applications',
      content: `
# Natural Language Processing Projects

NLP is one of the most exciting fields in machine learning. Let's explore some practical applications and projects.

## Getting Started with NLP

Natural Language Processing combines linguistics and machine learning to help computers understand human language.
      `,
    }
  ];

  if (showPost) {
    const post = posts.find(p => p.id === postId);
    return <BlogPost post={post} />;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Machine Learning Journey
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Exploring the fascinating world of artificial intelligence and machine learning
      </Typography>
      
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <Card>
              <CardActionArea onClick={() => navigate(\`/ml/\${post.id}\`)}>
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
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {post.content.split('\n')[0]}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MLBlog;