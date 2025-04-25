const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MAKE_URL: process.env.MAKE_URL,
  },
  // תוכל להוסיף כאן גם future flags או שאר קונפיגים
};

module.exports = withBundleAnalyzer(nextConfig);
