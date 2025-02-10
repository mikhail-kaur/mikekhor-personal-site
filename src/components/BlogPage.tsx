import React, { useState, useEffect } from "react";
import { Container, Typography, Card, CardContent, Grid } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useParams } from "react-router-dom";
import { getBlogPosts, BlogPost } from "../utils/blogUtils.ts";

type BlogPageProps = {
  title: string;
  subtitle: string;
  category: string;
  showPost?: boolean;
};

const BlogPage = ({ title, subtitle, category, showPost }: BlogPageProps) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const { postId } = useParams();

  useEffect(() => {
    const loadPosts = async () => {
      const loadedPosts = await getBlogPosts(category);
      setPosts(loadedPosts);
    };
    loadPosts();
  }, [category]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        {subtitle}
      </Typography>

      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <Grid item xs={12} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {post.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  {new Date(post.timestamp).toLocaleString()}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  gutterBottom
                >
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

export default BlogPage;