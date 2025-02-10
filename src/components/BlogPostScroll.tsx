import React from "react";
import { CardContent, Typography, Grid, Card } from "@mui/material";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { BlogPost } from "../utils/blogUtils";

export default function BlogPostScroll({ posts, category, navigate }: { posts: BlogPost[], category: string, navigate: (path: string) => void }) {
  return (
    <Grid container spacing={3}>
      {posts.map((post) => (
        <Grid item xs={12} key={post.id}>
            <Card
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: 6,
                }
              }}
              onClick={() => navigate(`/${category}/${post.id}`)}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  {new Date(post.timestamp).toLocaleString()}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  {post.subtitle}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
  );
}
