const withPWA = require("next-pwa")({
  dest: "public", // Service worker output directory
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
});

module.exports = withPWA({
  reactStrictMode: true,
});
