/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()

const nextConfig = {
  basePath: '/xiaoyu_tools',
  reactStrictMode: true
};

module.exports = nextConfig
module.exports = withMDX()