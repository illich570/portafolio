import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
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
	const classes = useStyles()

	return (
		<Grid className={classes.container} container>
			<Grid item lg={4} md={5} xs={3}>
				<hr className={classes.line} />
			</Grid>
			<Grid alignItems="center" container item justify="center" lg={1} md={1} xs={3}>
				<div className={classes.square} />
			</Grid>
			<Grid item lg={4} md={5} xs={3}>
				<hr className={classes.line} />
			</Grid>
		</Grid>
	)
}
