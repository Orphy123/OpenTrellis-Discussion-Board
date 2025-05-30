// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Google avatars
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',                   // ✅ UploadThing files
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
