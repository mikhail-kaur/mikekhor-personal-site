import React from "react";
import BlogPage from "../components/BlogPage.tsx";

const MLBlog = ({ showPost }: { showPost?: boolean }) => (
  <BlogPage
    title="Machine Learning Journey"
    subtitle="Exploring the fascinating world of artificial intelligence and machine learning"
    category="machinelearning"
    showPost={showPost}
  />
);

export default MLBlog;
