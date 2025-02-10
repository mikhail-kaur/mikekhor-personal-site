import React from "react";
import { Typography, Container } from "@mui/material";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { BlogPost } from "../utils/blogUtils";

export default function BlogSinglePage({ post }: { post: BlogPost }) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        mb: 4,
        bgcolor: 'background.paper',
        borderRadius: 1,
        p: 3,
        boxShadow: 1
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        {post.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {post.subtitle}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {new Date(post.timestamp).toLocaleString()}
        </Typography>
        <div className="markdown-preview">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </Container>
  );
}
