import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

const production = !process.env.ROLLUP_WATCH

export default [
	{
		input: 'src/main.js',
		output: [
			{ file: 'dist/main.js', format: 'cjs' }
		]
	},
	{
		input: 'src/renderer.js',
		output: [
			{ file: 'dist/renderer.js', format: 'cjs'},
		]
	}
]
