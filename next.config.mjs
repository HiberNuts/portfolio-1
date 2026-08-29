/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/gpt",
        destination: "https://gpt56-soul.vercel.app/",
      },
      {
        source: "/gpt/:path*",
        destination: "https://gpt56-soul.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
