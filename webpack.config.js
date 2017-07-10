const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCss = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');

const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common = merge([
	{
		entry: {
			'index': PATHS.source + '/pages/index/index.js',
			'blog': PATHS.source + '/pages/blog/blog.js'
		},
		output: {
			path: PATHS.build,
			filename: 'js/[name].js'
		},
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['index', 'common'],
				template: PATHS.source + '/pages/index/index.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'blog.html',
				chunks: ['blog', 'common'],
				template: PATHS.source + '/pages/blog/blog.pug'
			}),
			// Конкатенирует весь код css или js в один файл
			new webpack.optimize.CommonsChunkPlugin({
				name: 'common'
			}),
			// Provide автоматом подключает указанные библиотеки туда
			// где была использована та или иная библиотека
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery'
			})
		],
	},
	pug(),
    images()
]);



module.exports = function(env) {
	if(env === 'production') {
		return merge([
			common,
            extractCss(),
			uglifyJS()
		])
	}

	if(env === 'development') {
		return merge([ common, devserver(), sass(), css() ] )
	}
}