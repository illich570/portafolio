'use client'

import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { makeStyles } from 'tss-react/mui'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { useTransition } from 'react'

const useStyles = makeStyles()((theme) => ({
	container: {
		color: theme.palette.primary.main,
		fontWeight: 200,
		borderStyle: 'none',
		borderWidth: 2,
		borderRadius: 12,
		paddingLeft: '.6em',
		textTransform: 'uppercase',
		'&:focus': {
			borderRadius: 12,
			borderColor: theme.palette.primary.main,
		},
	},
	icon: {
		color: theme.palette.primary.main,
		right: 12,
		position: 'absolute',
		userSelect: 'none',
		pointerEvents: 'none',
	},
	paper: {
		borderRadius: 12,
		marginTop: 8,
	},
	list: {
		paddingTop: 0,
		paddingBottom: 0,
		background: 'white',
		textTransform: 'uppercase',
		'& li': {
			fontWeight: 200,
			paddingTop: 12,
			paddingBottom: 12,
		},
		'& li:hover': {
			background: theme.palette.primary.main,
			color: 'white',
		},
		'& li.Mui-selected': {
			color: 'white',
			background: theme.palette.primary.main,
		},
		'& li.Mui-selected:hover': {
			background: theme.palette.primary.main,
		},
	},
	control: {
		'@media (max-width: 599px)': {
			width: '100%',
		},
	},
}))

export default function ChangeLanguage() {
	const { classes } = useStyles()
	const locale = useLocale()
	const router = useRouter()
	const pathname = usePathname()
	const [isPending, startTransition] = useTransition()

	const menuProps = {
		PaperProps: {
			className: classes.paper,
		},
		MenuListProps: {
			className: classes.list,
		},
		anchorOrigin: {
			vertical: 'bottom',
			horizontal: 'left',
		},
		transformOrigin: {
			vertical: 'top',
			horizontal: 'left',
		},
	}

	const handleChangeLanguage = (event) => {
		const newLocale = event.target.value
		startTransition(() => {
			router.replace(pathname, { locale: newLocale })
		})
	}

	return (
		<FormControl className={classes.control} disabled={isPending}>
			<Select
				MenuProps={menuProps}
				className={classes.container}
				disableUnderline
				value={locale}
				variant="standard"
				onChange={handleChangeLanguage}
			>
				{routing.locales.map((loc, index) => (
					<MenuItem key={`${loc}_${index}`} value={loc}>
						{loc}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}
