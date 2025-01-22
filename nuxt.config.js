module.exports = {
	buildDir: '.nuxt',
	ignoreOptions: {
    		allowRelativePaths: true
	},
	dir: {
		middleware: __dirname + '/middleware',
	},
	server: {
    host: '0.0.0.0',
    port: 3000
  },
}
