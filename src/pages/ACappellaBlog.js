import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, Grid, CardMedia } from '@mui/material';
import { loadBlogPosts } from '../utils/blogUtils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

function ACappellaBlog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const blogPosts = await loadBlogPosts('acappella');
      setPosts(blogPosts);
    };
    fetchPosts();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        A Cappella Adventures
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <Grid item xs={12} key={index}>
            <Card>
              {post.preview_image && (
                <CardMedia
                  component="img"
                  height="200"
                  image={post.preview_image}
                  alt={post.title}
                  sx={{ objectFit: 'cover' }}
                />
              )}
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
                    {post.content.split('\n').slice(0, 3).join('\n')}...
                  </ReactMarkdown>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ACappellaBlog;