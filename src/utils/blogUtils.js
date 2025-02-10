import matter from 'gray-matter';

export const loadBlogPosts = async (category) => {
  const context = require.context(
    '../../content',
    true,
    /\.md$/
  );

  const posts = context.keys()
    .filter(key => key.startsWith(`./${category}/`))
    .map(key => {
      const path = key.slice(2); // remove './'
      const content = context(key);
      const { data, content: markdown } = matter(content.default);
      
      return {
        slug: path.replace('/index.md', ''),
        ...data,
        content: markdown,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
};

export const loadBlogPost = async (category, slug) => {
  const context = require.context(
    '../../content',
    true,
    /\.md$/
  );

  const key = `./${category}/${slug}/index.md`;
  const content = context(key);
  const { data, content: markdown } = matter(content.default);

  return {
    ...data,
    content: markdown,
  };
};