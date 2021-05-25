module.exports = {
  images: {
    domains: ["nine4.app"],
  },
  env: {
    GA_ENV: process.env.GA_ENV,
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
};
