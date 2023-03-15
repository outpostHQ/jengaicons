/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  compiler: {
    styledComponents: true,
    // removeConsole: true,
  },
  swcMinify: true,
}

module.exports = nextConfig
