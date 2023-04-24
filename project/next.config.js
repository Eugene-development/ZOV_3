/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "flowbite.s3.amazonaws.com",
  //       port: "80",
  //       pathname: "/",
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
