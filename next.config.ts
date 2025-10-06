import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "dalgau.ru" },
      { protocol: "https", hostname: "avatars.mds.yandex.net" },
      { protocol: "https", hostname: "get.wallhere.com" },
      { protocol: "https", hostname: "example.com" },
    ],
  },
};

export default nextConfig;
