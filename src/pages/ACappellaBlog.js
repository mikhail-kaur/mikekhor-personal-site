import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const ACappellaBlog = () => {
  const posts = [
    {
      title: 'A Cappella Arrangement Techniques',
      date: '2025-02-10',
      subtitle: 'Tips and tricks for creating engaging vocal arrangements',
      content: `
# A Cappella Arrangement Techniques

Creating effective a cappella arrangements requires understanding of both music theory and vocal capabilities. Here's my approach to arranging popular songs for vocal groups.

## The Basics of Arrangement

When arranging for a cappella, we need to consider:
- Vocal ranges
- Part distribution
- Rhythm section simulation
- Dynamic balance
      `,
      preview_image: null
    },
    {
      title: 'Building Your A Cappella Group',
      date: '2025-02-09',
      subtitle: 'Essential tips for starting and managing a vocal ensemble',
      content: `
# Building Your A Cappella Group

Starting an a cappella group can be challenging but rewarding. Here are some key considerations for success.

## Finding Your Members

The key to a great a cappella group is finding the right mix of voices and personalities.
      `,
      preview_image: null
    }
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

export default ACappellaBlog;