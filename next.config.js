module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      type: "asset/source",
    });
    config.module.rules.push({
      test: /\.svg$/,
      type: "asset/resource",
    });
    return config;
  },
};
