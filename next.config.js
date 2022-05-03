/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	basePath: "/saiyanshivvy.github.io",
	images: {
		loader: "imgix",
		path: "",
	},
};

module.exports = nextConfig;
