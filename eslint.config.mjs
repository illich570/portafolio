import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

const eslintConfig = [
	{
		ignores: ['scripts/**', 'node_modules/**', 'public/**', 'CHANGELOG.md', '.next/**'],
	},
	...compat.extends('next/core-web-vitals', 'prettier'),
	{
		rules: {
			'react/jsx-sort-props': ['warn', { callbacksLast: true }],
			'no-console': ['error', { allow: ['warn', 'error'] }],
		},
	},
]

export default eslintConfig
