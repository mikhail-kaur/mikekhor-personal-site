import React from "react";
import BlogPage from "../components/BlogPage";

const MLBlog = ({ showPost }: { showPost?: boolean }) => (
  <BlogPage
    title="AI/ML Musings"
    subtitle="My honest but sometimes regurgitated opinions about AI/ML, and the ocassional humble brag."
    category="aiml"
    showPost={showPost}
  />
);

export default MLBlog;
