import type { NextConfig } from "next"
// import withBundleAnalyzer from "@next/bundle-analyzer"

// const withAnalyzer = withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })
const nextConfig: NextConfig = {
  experimental: { viewTransition: true },
  allowedDevOrigins: ["localhost:3000"],

  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https" as const,
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
    ],
    domains: [
      'github.com',
      '/Screenshot 2025-10-07 164225 (2).png',
      '/Screenshot 2025-10-11 135252.png',
      '/Screenshot 2025-10-11 135532.png',
      '/Screenshot 2025-10-11 135713.png', // <-- Add this line to allow loading images from GitHub
      // If you have other external image sources, list them here too
      // 'example.com',
    ],
  },
}

// export default withAnalyzer(nextConfig)

export default nextConfig