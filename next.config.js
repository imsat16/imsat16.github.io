/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// const withPWA = require ('next-pwa') ({
//   dest: 'public',
//   // disable: process.env.NODE_ENV === 'development',
//   disable:false,
//   register: true,
//   scope: '/app',
//   sw: 'service-worker.js',
// });


// module.exports = withPWA({
//   nextConfig
// })
module.exports = nextConfig

// const withPWA = require("next-pwa")

// module.exports = (withPWA)({
//   dest: "public",
//   register:true,
//   skipWaiting:true,
//   // disable: process.env.NODE_ENV === "development"
//   disable:false,
//   register: true,
//   scope: '/app',
//   sw: 'service-worker.js',
// })