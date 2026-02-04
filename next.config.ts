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
          destination: `http://localhost:3000/doc/images/:path*`,
          basePath: false,
        },
      ],
    };
  },
  basePath: "/doc",
};

export default nextConfig;
