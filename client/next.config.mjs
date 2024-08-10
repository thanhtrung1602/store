/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    backend_local: "http://localhost:3000",
  },
  images: {
    domains: ["res.cloudinary.com"], // Thêm tên miền vào đây
  },
};

export default nextConfig;
