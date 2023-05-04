/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_URI:
      "mongodb+srv://muhammedhagras237:Qut0EYYshI0cpkfn@cluster0.f2f48rh.mongodb.net/NextJs-app?retryWrites=true&w=majority",
    APP_DEV: "http://localhost:3000",
    APP_PROD: "",
  },
};

module.exports = nextConfig;
