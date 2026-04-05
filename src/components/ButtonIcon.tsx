'use client'

import { Button, Icon } from '@mui/material'
import type { ButtonProps } from '@mui/material/Button'
import { makeStyles } from 'tss-react/mui'

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
	icon?: string
	title: string
}

export default function ButtonIcon({
	icon,
	title,
	variant = 'contained',
	...rest
}: ButtonIconProps) {
	const { classes, cx } = useStyles()
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
			{icon ? <Icon>{icon}</Icon> : null}
			{title}
		</Button>
	)
}
