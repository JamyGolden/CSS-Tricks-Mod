({
	baseUrl: '../../src/app/',
	name: 'config',
	deps: ['main'],
	mainConfigFile: '../../src/app/config.js',
	optimize: 'uglify2',
	// generateSourceMaps: true,
	//preserveLicenseComments: false, //required for source map
	out: '../../public/app.js'
})