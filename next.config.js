/** @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV || "production") === "production";

const nextConfig = {
	reactStrictMode: true,
	exportPathMap: () => ({
		"/": { page: "/" },
	}),
	basePath: isProd ? "/" : "",
	assetPrefix: isProd ? "/" : "",
	images: {
		loader: "imgix",
		path: "",
	},
};

module.exports = nextConfig;
