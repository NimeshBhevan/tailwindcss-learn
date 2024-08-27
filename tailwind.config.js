/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "selector",
	content: ["./docs/**/*.{html,js}"],
	theme: {
		extend: {
			keyframes: {
				wavey: {
					"0%, 100%": {
						transform: "scaleY(0.5)",
					},
					"50%": {
						transform: "scaleY(1.5)",
					},
				},
			},
			animation: {
				wavey: "wavey 1000ms linear infinite",
			},
		},
	},
	plugins: [
		require("./docs/plugins/openVariant"),
		require("./docs/plugins/animationDelay"),
		require("./docs/plugins/tableCaption"),
	],
};
