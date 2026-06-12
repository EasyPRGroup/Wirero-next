const nextConfig = {
    reactStrictMode: true,
    output: "export",
    trailingSlash: true,
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
          pathname: "/**",
        },
      ],
    },
  };

  module.exports = nextConfig;