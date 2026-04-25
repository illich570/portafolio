import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { CodeIcon } from '@/components/icons'
import { cn } from '@/lib/cn'

type ButtonLinkVariant = 'contained' | 'outlined'

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	icon?: ReactNode
	iconName?: 'code'
	title: string
	variant?: ButtonLinkVariant
}

export default function ButtonLink({
	className,
	icon,
	iconName,
	title,
	variant = 'contained',
	...props
}: ButtonLinkProps) {
	const renderedIcon = icon ?? (iconName === 'code' ? <CodeIcon className="size-4" /> : null)

	return (
		<a
			{...props}
			className={cn(
				'inline-flex select-none items-center justify-center gap-1 rounded-[10px] border-2 border-primary px-4 py-2 font-medium uppercase transition-all duration-500',
				variant === 'contained' &&
					'bg-[linear-gradient(to_bottom,var(--color-primary)_50%,#fff_50%)] bg-[length:100%_200%] text-white hover:bg-[position:0_-100%] hover:border-black hover:text-black',
				variant === 'outlined' &&
					'bg-[linear-gradient(to_bottom,#fff_50%,var(--color-primary)_50%)] bg-[length:100%_200%] text-primary hover:bg-[position:0_-100%] hover:text-white',
				className
			)}
		>
			{renderedIcon}
			{title}
		</a>
	)
}
