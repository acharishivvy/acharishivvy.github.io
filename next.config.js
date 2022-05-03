/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	basePath: "/",
	images: {
		loader: "imgix",
		path: "",
	},
};

module.exports = nextConfig;
