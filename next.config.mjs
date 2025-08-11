/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // Разрешаем домены для внешних изображений. Добавил 'example.com' для вашей ошибки и 'dalgau.ru' для реальных URL из проекта.
      domains: ['example.com', 'dalgau.ru'],
      // Альтернатива для новых версий Next.js (если нужно): remotePatterns: [{ protocol: 'https', hostname: '**' }] — но это менее безопасно, не рекомендую.
    },
    // Другие настройки (например, для turbopack из вашего package.json)
  };
  
  export default nextConfig;