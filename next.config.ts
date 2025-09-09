import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export', // enables static export
	images: {
		unoptimized: true, // if using next/image
	},
	basePath: '',
};

export default nextConfig;
