/** @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV || "production") === "production";

const nextConfig = {
	reactStrictMode: true,
	exportPathMap: () => ({
		"/": { page: "/" },
	}),
	basePath: isProd ? "/saiyanshivvy.github.io" : "",
	assetPrefix: isProd ? "/saiyanshivvy.github.io" : "",
	images: {
		loader: "imgix",
		path: "",
	},
	webpack5: true,
};

module.exports = nextConfig;
