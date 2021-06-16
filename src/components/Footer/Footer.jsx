import { Grid, Typography } from '@material-ui/core'
import { Mail, LinkedIn, GitHub, Twitter, WhatsApp } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.primary.main,
		padding: '1em 2em',
		color: 'white',
	},
	spacingIcon: {
		transition: 'all 0.2s ease-in',
		margin: ' 0.30em',
		fontSize: '2.4em',
		'&:hover': {
			cursor: 'pointer',
			transform: 'scale(1.5,1.5)',
		},
	},
	containerGrid: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		flexDirection: 'column',
		'@media(min-width: 550px)': {
			alignItems: 'center',
		},
	},
}))

export default function Footer(props) {
	const classes = useStyles()
	return (
		<Grid container className={classes.container}>
			<Grid item xs={6} container className={classes.containerGrid}>
				<Typography variant="body1">{`Created with <3`}</Typography>
				<Typography variant="body1"> &copy;2021 Illich Rada</Typography>
			</Grid>
			<Grid item xs={6} container justify="center" alignItems="center">
				<Mail className={classes.spacingIcon} />
				<LinkedIn className={classes.spacingIcon} />
				<GitHub className={classes.spacingIcon} />
			</Grid>
		</Grid>
	)
}
