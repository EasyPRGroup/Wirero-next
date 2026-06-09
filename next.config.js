const nextConfig = {
    reactStrictMode: true,
    output: "export",
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