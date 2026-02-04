import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,

  async rewrites() {
    return {
      beforeFiles: [
        {
          source: `/images/:path*`,
          destination: `http://localhost:3000/cradle/images/:path*`,
          basePath: false,
        },
      ],
    };
  },
  basePath: "/cradle",
};

export default nextConfig;
