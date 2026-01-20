/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   serverActions: {
  //     bodySizeLimit: "10mb",
  //   },
  // },
  output: 'standalone',
  
  // // Disable x-powered-by header for security
  // poweredByHeader: false,
  
  // // Compression is handled by Azure, disable Next.js compression
  // compress: false,
  
  // // Enable React strict mode for better error catching in development
  // reactStrictMode: true,
};

export default nextConfig;
