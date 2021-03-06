module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		node: true,
		es6: true,
		jest: true,
	},
	extends: ['airbnb', 'prettier', 'prettier/react'],
	plugins: ['react-hooks', 'prettier'],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			modules: true,
			legacyDecorators: true,
			experimentalObjectRestSpread: true,
		},
	},
	globals: {
		require: true,
		React: 'readable',
	},
	settings: {
		'import/core-modules': ['core-js', 'raf'],
	},
	rules: {
		'react/no-this-in-sfc': 0,
		'prefer-destructuring': ['error', { object: false, array: false }],
		// 'no-unused-expressions': ['off'],
		'no-else-return': ['off', { allowElseIf: true }],
		'multiline-ternary': ['off', 'never'],
		// 'max-len': ['warn', { code: 120, tabWidth: 2 }],
		'react/jsx-filename-extension': [
			'warn',
			{
				extensions: ['.js', '.jsx'],
			},
		],
		'class-methods-use-this': 'error',
		'import/imports-first': ['error', 'absolute-first'],
		'import/newline-after-import': 'error',
		'import/no-unresolved': 'off',
		// indent: ['error', 'tab'],
		'no-tabs': 0,
		indent: [
			'error',
			'tab',
			{
				ignoredNodes: ['TemplateLiteral'],
				SwitchCase: 1,
			},
		],
		'react/jsx-indent': [0, 'tab', { checkAttributes: false, indentLogicalExpressions: true }],
		'react/jsx-indent-props': [2, 'tab'],
		semi: [2, 'always'],
		'comma-style': ['error', 'last'],
		'no-console': 0,
		'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
		'no-shadow': [
			2,
			{
				hoist: 'all',
				allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
			},
		],
		'no-bitwise': ['error', { allow: ['<<', '>>', '&'] }],
		camelcase: ['error'],
		'react/sort-comp': [
			1,
			{
				order: ['static-methods', 'lifecycle', 'everything-else', 'rendering'],
				groups: {
					rendering: ['/^render.+$/', 'render'],
				},
			},
		],
		'global-require': 'off',
		'no-nested-ternary': 'off',
		'react/prop-types': 0,
		'react/forbid-prop-types': 'off',
		'react/require-default-props': 'off',
		'react/destructuring-assignment': 'off',
		'react/no-array-index-key': 'off',
		'react/no-deprecated': 1,
		'no-underscore-dangle': 'off',
		'no-new': 'off',
		'linebreak-style': ['error', 'unix'],
		'no-param-reassign': [
			2,
			{
				props: false,
			},
		],
		'no-debugger': 'off',
		'no-alert': 'error',
		'no-func-assign': 'error',
		'no-duplicate-case': 'error',
		'no-extra-parens': ['error', 'functions'],
		'no-self-compare': 'error',
		'no-dupe-args': 'error',
		'accessor-pairs': 'error',
		'new-cap': [
			'error',
			{
				newIsCap: true,
				capIsNew: false,
			},
		],
		'new-parens': 'error',
		'no-class-assign': 'error',
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-mixed-spaces-and-tabs': 0,
		'import/no-extraneous-dependencies': 'off',
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
		'react/jsx-props-no-spreading': 'off',
		'no-var': 0,
	},
};
