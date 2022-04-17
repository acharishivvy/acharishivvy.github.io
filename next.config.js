/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	reactStrictMode: true,
	assetPrefix: isProd ? "/saiyanshivvy.github.io/" : "",
	images: {
		loader: "imgix",
		path: "",
	},
	presets: ["next/babel"],
};

module.exports = nextConfig;
