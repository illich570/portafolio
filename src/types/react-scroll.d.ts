declare module 'react-scroll' {
	import type { ComponentType, ReactNode } from 'react'

	export interface ElementProps {
		name?: string
		id?: string
	}

	export interface LinkProps {
		to: string
		smooth?: boolean
		spy?: boolean
		className?: string
		children?: ReactNode
		/** Passed through to underlying component */
		[key: string]: unknown
	}

	export const Link: ComponentType<LinkProps>
	export const Element: ComponentType<ElementProps>
}
