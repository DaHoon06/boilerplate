import type { NextConfig } from "next";
import nextTranspileModules from 'next-transpile-modules';

const packages = [
  "@datasketch/core",
  "@datasketch/design-system",
];

const withTM = nextTranspileModules(packages);

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  transpilePackages: packages,
  reactStrictMode: true,
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};

export default withTM(nextConfig);
