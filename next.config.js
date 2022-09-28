/** @type {import('next').NextConfig} */
module.exports = {
  async headers() {
    return [
      {
        source: '/fonts/:file',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  },
  reactStrictMode: true
};
