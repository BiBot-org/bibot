/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
  mode: "production",
  disableDevLogs: true,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["storage.googleapis.com"],
  },
  output: "standalone",
});

module.exports = nextConfig;
