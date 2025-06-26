/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/barber',
        destination: 'https://lifebox-labs.notion.site/Priv-partner-program-1aed5793dacc802fbeb3de2d45d3e387',
        permanent: true,
      },
      {
        source: '/start',
        destination: '/sign-up',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig