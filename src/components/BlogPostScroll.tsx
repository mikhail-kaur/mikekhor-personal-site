import React from "react";
import { CardContent, Typography, Grid, Card } from "@mui/material";
import { BlogPost } from "../types";
import TimeDisplay from "./TimeDisplay";

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
                <TimeDisplay 
                  timestamp={post.timestamp} 
                  variant="subtitle2"
                  sx={{ mb: 1 }}
                />
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
