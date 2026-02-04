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
          destination: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/doc/images/:path*`,
          basePath: false,
        },
      ],
    };
  },
  basePath: "/doc",
};

export default nextConfig;
