'use client'

import CodeIcon from '@mui/icons-material/Code'
import { Button } from '@mui/material'
import type { ButtonProps } from '@mui/material/Button'
import { makeStyles } from 'tss-react/mui'
import type { SvgIconComponent } from '@mui/icons-material'

const ICONS = {
	code: CodeIcon,
} as const satisfies Record<string, SvgIconComponent>

const useStyles = makeStyles()((theme) => ({
	button: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: '10px',
		border: '2px solid',
		borderColor: theme.palette.primary.main,
		userSelect: 'none',
		WebkitUserSelect: 'none',
		MozUserSelect: 'none',
		msUserSelect: 'none',
	},
	buttonOutlined: {
		border: '2px solid',
	},
	buttonContainedSweep: {
		background: `linear-gradient(to bottom,${theme.palette.primary.main} 50%, #fff 50%)`,
		backgroundSize: '100% 200%',
		transition: 'all 0.5s',
		'&:hover': {
			backgroundPosition: '0 -100%',
			borderColor: 'black',
			color: 'black',
			border: '2px solid',
		},
	},
	buttonOutlinedSweep: {
		background: `linear-gradient(to bottom,#fff 50%,${theme.palette.primary.main} 50%)`,
		backgroundSize: '100% 200%',
		transition: 'all 0.5s',
		'&:hover': {
			backgroundPosition: '0 -100%',
			color: 'white',
			border: '2px solid',
		},
	},
}))

export type ButtonIconProps = Omit<ButtonProps, 'children'> & {
	icon?: keyof typeof ICONS
	title: string
}

export default function ButtonIcon({
	icon,
	title,
	variant = 'contained',
	...rest
}: ButtonIconProps) {
	const { classes, cx } = useStyles()
	const IconComponent = icon ? ICONS[icon] : null
	return (
		<Button
			{...rest}
			className={cx(
				classes.button,
				variant === 'outlined' ? classes.buttonOutlined : null,
				variant === 'outlined' ? classes.buttonOutlinedSweep : classes.buttonContainedSweep
			)}
			variant={variant}
		>
			{IconComponent ? <IconComponent fontSize="small" sx={{ mr: 0.5 }} /> : null}
			{title}
		</Button>
	)
}
