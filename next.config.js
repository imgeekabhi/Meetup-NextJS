/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGODB_USERNAME: "as_simform",
    MONGODB_PASSWORD: "xeVxxhmpHU4TpTVW",
    MONGODB_CLUSTER_NAME: "cluster0",
    MONGODB_DATABASE_NAME: "meetups",
  },
};

module.exports = nextConfig;
