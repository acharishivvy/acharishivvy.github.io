/** @type {import('next').NextConfig} */

const nextConfig = {
	output: "standalone",
	reactStrictMode: true,
	basePath: "",
	images: {
		unoptimized: true,
	},
};

module.exports = nextConfig;
