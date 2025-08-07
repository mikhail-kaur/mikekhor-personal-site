import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogPosts, BlogPost } from "../utils/blogUtils.ts";
import BlogPostScroll from "./BlogPostScroll.tsx";
import BlogSinglePage from "./BlogSinglePage.tsx";

type BlogPageProps = {
  title: string;
  subtitle: string;
  category: string;
  showPost?: boolean;
};

const BlogPage = ({ title, subtitle, category, showPost }: BlogPageProps) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      const loadedPosts = await getBlogPosts(category);
      setPosts(loadedPosts);
    };
    loadPosts();
  }, [category]);

  const singlePost = showPost && postId ? posts.find((p) => p.id === postId) : null;

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flex: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        {subtitle}
      </Typography>
      {singlePost ? (
        <BlogSinglePage post={singlePost} />
      ) : (
        <BlogPostScroll posts={posts} category={category} navigate={navigate} />
      )}
    </Container>
  );
};

export default BlogPage;