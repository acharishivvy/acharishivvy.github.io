/** @type {import('next').NextConfig} */

const main = process.env.DEPLOY_TARGET === "main";

const nextConfig = {
	reactStrictMode: true,
	assetPrefix: main ? "/saiyanshivvy.github.io/" : "",
	images: {
		loader: "imgix",
		path: "",
	},
};

module.exports = nextConfig;

