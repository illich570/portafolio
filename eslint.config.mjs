import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import prettierFlat from 'eslint-config-prettier/flat'

const eslintConfig = [
	{
		ignores: ['scripts/**', 'node_modules/**', 'public/**', 'CHANGELOG.md', '.next/**'],
	},
	...nextCoreWebVitals,
	prettierFlat,
	{
		rules: {
			'react/jsx-sort-props': ['warn', { callbacksLast: true }],
			'no-console': ['error', { allow: ['warn', 'error'] }],
		},
	},
]

export default eslintConfig
