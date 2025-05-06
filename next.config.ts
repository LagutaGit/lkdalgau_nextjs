import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

};
module.exports = {
  images: {
    domains: ["dalgau.ru", "avatars.mds.yandex.net"], // Разрешаем изображения с этого домена
  },
};

export default nextConfig;
