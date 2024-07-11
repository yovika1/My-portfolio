module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Modify webpack config as needed
    config.module.rules.push({
      test: /\.(m?js|jsx)$/,
      resolve: {
        fullySpecified: false,
      },
    });
    return config;
  },
};
