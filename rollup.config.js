let resolve = require("@rollup/plugin-node-resolve");
let commonjs = require("@rollup/plugin-commonjs");
let json = require('@rollup/plugin-json');
let pkg = require('./package.json');
let typescript = require('rollup-plugin-typescript2');
const external = Object.keys(pkg.dependencies || {});
let babel = require('rollup-plugin-babel');
let { terser } = require('rollup-plugin-terser');

export default {
	external: external,
	input: "src/index.ts",
	output: [
		{
			file: "dist/index.js",
			format: "cjs"
		}
	],
	plugins: [
		json(),
		typescript({
			tsconfigDefaults: {
				compilerOptions: {
					target: 'ES3',
					module: 'ES2015',
					moduleResolution: 'node',
					noImplicitAny: true,
					strictNullChecks: true,
					strictFunctionTypes: true,
					strictPropertyInitialization: true,
					strictBindCallApply: true,
					noImplicitThis: true,
					noImplicitReturns: true,
					alwaysStrict: true,
					noUnusedLocals: true,
					noUnusedParameters: true,
					esModuleInterop: true,
					declaration: true,
					removeComments: true,
					resolveJsonModule: true,
					typeRoots: [ 'node_modules/@types' ]
				}
			}
		}),
		resolve(),
		commonjs(),
		babel({
			plugins: [
				"@babel/plugin-transform-member-expression-literals",
				"@babel/plugin-transform-property-literals",
				"@babel/plugin-transform-reserved-words",
				"@babel/plugin-transform-property-mutators",
				"@babel/plugin-transform-block-scoped-functions",
				"@babel/plugin-transform-block-scoping",
				"@babel/plugin-transform-classes",
				"@babel/plugin-transform-computed-properties",
				"@babel/plugin-transform-destructuring",
				"@babel/plugin-transform-duplicate-keys",
				"@babel/plugin-transform-for-of",
				"@babel/plugin-transform-function-name",
				"@babel/plugin-transform-instanceof",
				"@babel/plugin-transform-new-target",
				"@babel/plugin-transform-object-super",
				"@babel/plugin-transform-parameters",
				"@babel/plugin-transform-shorthand-properties",
				"@babel/plugin-proposal-object-rest-spread",
				"@babel/plugin-transform-sticky-regex",
				"@babel/plugin-transform-template-literals",
				"@babel/plugin-transform-typeof-symbol",
				"@babel/plugin-transform-unicode-regex",
				"@babel/plugin-transform-exponentiation-operator",
				"@babel/plugin-transform-async-to-generator",
				"@babel/plugin-proposal-async-generator-functions",
				"@babel/plugin-transform-dotall-regex",
				"@babel/plugin-transform-named-capturing-groups-regex",
				"@babel/plugin-proposal-optional-catch-binding",
				"@babel/plugin-proposal-unicode-property-regex"
			]
		}),
		terser()
	]
}