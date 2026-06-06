/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  serverRuntimeConfig: {
    apiUrl: "http://192.168.1.2:3000",
  },
  publicRuntimeConfig: {
    apiUrl: "http://192.168.1.2:3000",
  },
  allowedDevOrigins: ["192.168.1.2"],
};

export default nextConfig;
