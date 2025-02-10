import matter from 'gray-matter';

export const loadBlogPosts = async (category) => {
  // In a real application, this would fetch from an API or read from the filesystem
  // For now, we'll return hardcoded data as an example
  const posts = [
    {
      title: 'Getting Started with Deep Learning',
      subtitle: 'A beginner\'s guide to neural networks and deep learning concepts',
      date: '2025-02-10T10:00:00.000Z',
      tags: ['deep-learning', 'neural-networks', 'machine-learning'],
      preview_image: null,
      content: `# Getting Started with Deep Learning

Deep learning has revolutionized the field of artificial intelligence. In this post, we'll explore the fundamentals and get you started with your first neural network.`
    },
    // Add more posts as needed
  ];

  return posts;
};

export const loadBlogPost = async (category, slug) => {
  // This would normally fetch a specific post from an API or filesystem
  // For now, return a sample post
  return {
    title: 'Getting Started with Deep Learning',
    subtitle: 'A beginner\'s guide to neural networks and deep learning concepts',
    date: '2025-02-10T10:00:00.000Z',
    tags: ['deep-learning', 'neural-networks', 'machine-learning'],
    preview_image: null,
    content: `# Getting Started with Deep Learning

Deep learning has revolutionized the field of artificial intelligence. In this post, we'll explore the fundamentals and get you started with your first neural network.`
  };
};