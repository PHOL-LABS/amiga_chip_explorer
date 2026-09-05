import { imageHosts } from './image-hosts.config.js';

const configuredBasePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').trim();
const basePath = configuredBasePath === '/' ? '' : configuredBasePath.replace(/\/+$/, '');

if (
  basePath &&
  (!basePath.startsWith('/') ||
    basePath.includes('://') ||
    basePath.includes('?') ||
    basePath.includes('#'))
) {
  throw new Error('NEXT_PUBLIC_BASE_PATH must be empty or a pathname such as /achip-explorer');
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,

  productionBrowserSourceMaps: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: imageHosts,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(jsx|tsx)$/,
      exclude: [/node_modules/],
      use: [
        {
          loader: '@dhiwise/component-tagger/nextLoader',
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
