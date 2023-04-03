/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    
  },
  async rewrites() {
    return [
      {
        source: "/api/add_movie",
        destination: "http://localhost:3001/api/v1/add_movie",
      },
    ]
  }
}

module.exports = nextConfig
