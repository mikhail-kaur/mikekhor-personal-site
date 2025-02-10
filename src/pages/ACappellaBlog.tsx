import React from "react";
import BlogPage from "../components/BlogPage.tsx";

const ACappellaBlog = ({ showPost }: { showPost?: boolean }) => (
  <BlogPage
    title="A Cappella Adventures"
    subtitle="Stories and experiences from my a cappella singing journey"
    category="acappella"
    showPost={showPost}
  />
);

export default ACappellaBlog;
