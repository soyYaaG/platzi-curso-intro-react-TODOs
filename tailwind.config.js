const colors = require("tailwindcss/colors");

module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				sky: colors.sky,
				purpel: colors.purple
			},
			fontFamily : {
				'montserrat': ['Montserrat', 'sans-serif']
			}
		},
	},
	plugins: [],
}