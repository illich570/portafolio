'use client'

import { Grid } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
	line: {
		border: '2px solid',
		borderColor: theme.palette.primary.main,
		backgroundColor: theme.palette.primary.main,
		width: '100%',
		display: 'flex',
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '2.5em 0',
		zIndex: -5,
	},
	square: {
		border: '4px solid',
		borderColor: theme.palette.primary.main,
		boxSizing: 'border-box',
		transform: 'rotate(-45deg)',
		width: '40px',
		height: '40px',
	},
}))

export default function SectionDivider() {
	const { classes } = useStyles()

	return (
		<Grid className={classes.container} container>
			<Grid size={{ xs: 3, md: 5, lg: 4 }}>
				<hr className={classes.line} />
			</Grid>
			<Grid alignItems="center" container justifyContent="center" size={{ xs: 3, md: 1, lg: 1 }}>
				<div className={classes.square} />
			</Grid>
			<Grid size={{ xs: 3, md: 5, lg: 4 }}>
				<hr className={classes.line} />
			</Grid>
		</Grid>
	)
}
