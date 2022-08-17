/** @type {import('next').NextConfig} */

const withPreact = require("next-plugin-preact");

module.exports = withPreact({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
  },
});
