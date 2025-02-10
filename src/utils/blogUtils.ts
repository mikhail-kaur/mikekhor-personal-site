declare const require: {
  context: (
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ) => {
    keys(): string[];
    (id: string): any;
  };
};

export type BlogPost = {
  title: string;
  subtitle: string;
  timestamp: number;
  content: string;
};

export const getBlogPosts = async (category) => {
  const context = require.context("../content", true, /\.md$/);
  const metadataContext = require.context(
    "../content",
    true,
    /metadata\.json$/
  );

  const posts = await Promise.all(
    context
      .keys()
      .filter((key) => key.startsWith(`./${category}/`))
      .map(async (key) => {
        // Get the content URL and fetch the actual content
        const contentUrl = context(key);
        const contentResponse = await fetch(contentUrl);
        const content = await contentResponse.text();

        // Get the corresponding metadata file
        const dir = key.substring(0, key.lastIndexOf("/") + 1);
        const metadataKey = dir + "metadata.json";

        try {
          const metadata = metadataContext(metadataKey);
          return {
            ...metadata,
            content,
          };
        } catch (error) {
          console.error("Error parsing metadata for", key, ":", error);
          return null;
        }
      })
  );

  return posts.filter(Boolean).sort((a, b) => b.timestamp - a.timestamp);
};
