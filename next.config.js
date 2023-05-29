/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    localeDetection: false,
    domains: [
      {
        defaultLocale: "catchAll",
        domain: "localhost",
        http: true,
        locales: ["en", "de"],
      },
    ],
  },
  async rewrites() {
    return [
      { source: "/de/de-test", destination: "/test", locale: false },
      { source: "/en/test", destination: "/test", locale: false },
    ];
  },
};

module.exports = nextConfig;
