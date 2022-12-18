/** @type {import('next').NextConfig} */
const Path = require("path");

const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config, options) => {
    config.resolve.alias.react = Path.resolve(__dirname, 'node_modules/react');
    return config
  },
}

module.exports = nextConfig
