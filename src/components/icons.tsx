import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function CodeIcon(props: IconProps) {
	return (
		<svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
			<path
				d="m9 18-6-6 6-6M15 6l6 6-6 6"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</svg>
	)
}

export function MenuIcon(props: IconProps) {
	return (
		<svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
			<path
				d="M4 6h16M4 12h16M4 18h16"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="2"
			/>
		</svg>
	)
}

export function ChevronDownIcon(props: IconProps) {
	return (
		<svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
			<path
				d="m6 9 6 6 6-6"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</svg>
	)
}

export function MailIcon(props: IconProps) {
	return (
		<svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
			<path d="M4 6h16v12H4z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
			<path
				d="m4 7 8 6 8-6"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</svg>
	)
}

export function LinkedInIcon(props: IconProps) {
	return (
		<svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path d="M6.94 8.98H3.75V20h3.19V8.98ZM5.35 4a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7ZM20.25 13.68c0-2.96-1.58-4.34-3.68-4.34-1.7 0-2.46.93-2.88 1.59V8.98h-3.06c.04 1.03 0 11.02 0 11.02h3.19v-6.15c0-.33.02-.66.12-.9.26-.66.85-1.34 1.84-1.34 1.3 0 1.82 1 1.82 2.46V20h3.19l-.54-6.32Z" />
		</svg>
	)
}

export function GitHubIcon(props: IconProps) {
	return (
		<svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path
				clipRule="evenodd"
				d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2-.45-1.15-1.1-1.46-1.1-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.35 1.08 2.92.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0 1 12 6c.85 0 1.7.11 2.5.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
				fillRule="evenodd"
			/>
		</svg>
	)
}

export function TwitterIcon(props: IconProps) {
	return (
		<svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path d="M18.9 2.5h3.07l-6.7 7.66L23.15 20.5h-6.17l-4.83-6.32-5.53 6.32H3.55l7.17-8.2L3.16 2.5h6.33l4.36 5.77 5.05-5.77Zm-1.08 16.18h1.7L8.56 4.22H6.73l11.09 14.46Z" />
		</svg>
	)
}
