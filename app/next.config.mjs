/** @type {import('next').NextConfig} */
import dotenv from 'dotenv';
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const basePath = path.dirname(__filename);

const environment = process.env.NODE_ENV || 'local';
dotenv.config({ path: `.env.${environment}` });

console.log(process.env.NEXT_PUBLIC_BASE_PATH ?? basePath);
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH ?? basePath,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC
  },
  output: 'export',
  distDir: 'dist',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? basePath,
  images: { unoptimized: true } ,
  webpack: (config) => {
    config.resolve.alias['@styles'] = path.join(basePath, '/styles');
    return config;
  },
};

export default nextConfig;
