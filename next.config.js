/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['th','en'],
    defaultLocale: 'th',
    localeDetection: false
  }
}

module.exports = nextConfig
