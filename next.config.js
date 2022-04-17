/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === "production" ? "/repo" : "";
const nextConfig = {
	reactStrictMode: true,
	basePath,
	assetPrefix: `${basePath}/`,
	images: {
		loader: "imgix",
		path: "",
	},
};

module.exports = nextConfig;

