/** @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV || "production") === "production";

const nextConfig = {
	reactStrictMode: true,
	basePath: "",
	images: {
		loader: "imgix",
		path: "",
	},
};

module.exports = nextConfig;
