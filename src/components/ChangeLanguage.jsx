import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
	container: {
		// minWidth: 200,
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
	const classes = useStyles()
	const { locale, locales, push, route, asPath } = useRouter()

	const menuProps = {
		classes: {
			paper: classes.paper,
			list: classes.list,
		},
		anchorOrigin: {
			vertical: 'bottom',
			horizontal: 'left',
		},
		transformOrigin: {
			vertical: 'top',
			horizontal: 'left',
		},
		getContentAnchorEl: null,
	}

	const handleChangeLanguage = (event) => {
		return push(route, asPath, { locale: event.target.value })
	}

	return (
		<FormControl className={classes.control}>
			<Select
				MenuProps={menuProps}
				classes={{ root: classes.container }}
				disableUnderline
				onChange={handleChangeLanguage}
				value={locale || 'es'}
			>
				{locales.map((local, index) => (
					<MenuItem key={`${local}_${index}`} value={local}>
						{local}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}
