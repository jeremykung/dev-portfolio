// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxt/ui", "@nuxtjs/tailwindcss"],
	components: true,
	// css: ["~/assets/css/main.css"],
	colorMode: {
		preference: "system", // light mode > change "system" to "light", refresh local storage
	},
	ui: {
		icons: ["basil"],
	},
})
