import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const BlogPost = ({ post }) => {
  if (!post) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography>Post not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {post.subtitle}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          {new Date(post.date).toLocaleDateString()}
        </Typography>
        <div className="markdown-content">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              img: ({ node, ...props }) => (
                <img style={{ maxWidth: '100%', height: 'auto' }} {...props} alt={props.alt || ''} />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </Paper>
    </Container>
  );
};

export default BlogPost;