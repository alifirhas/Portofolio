/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{html,js}",
		"./projects/**/*.{html,js}",
		"./index.html",
	],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: ["cupcake", "dark", "cmyk", "cyberpunk"],
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
