/** @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV || "production") === "production";

const nextConfig = {
	reactStrictMode: true,
	exportPathMap: () => ({
		"/": { page: "/" },
	}),
	basePath: isProd ? "/" : "",
	images: {
		loader: "imgix",
		path: "",
	},
	webpack5: true,
};

module.exports = nextConfig;
