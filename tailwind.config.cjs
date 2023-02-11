const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			backgroundColor: {
				'my-blue': '#1fb6ff',
				'my-pink': '#ff49db',
				'my-orange': '#ff7849',
				'my-green': '#13ce66',
				'my-gray-dark': '#273444',
				'my-gray': '#8492a6',
				'my-gray-light': '#d3dce6'
			}
		}
	},

	plugins: [require('flowbite/plugin')],
};

module.exports = config;
