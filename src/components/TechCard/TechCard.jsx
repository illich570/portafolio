import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	card: {
		width: '180px',
		height: '180px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		boxShadow: '1.4px 0px 4px 4px rgba(0, 0, 0, 0.08)',
		borderRadius: '15px',
		margin: '2em',
		padding: '1em',
	},
	image: {
		width: '85px',
		height: '85px',
		marginBottom: '1em',
	},
	titleCard: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		margin: 0,
		fontSize: '1rem',
		letterSpacing: '1px',
		'@media (min-width: 700px)': {
			fontSize: '1.25rem',
		},
	},
	buttonContainer: {
		margin: '0.8em 0',
	},
	containerBodyCard: {
		paddingBottom: '1.5em',
	},
	containerCards: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		maxWidth: '1000px',
	},
}))

export default function TechCard(props) {
	const classes = useStyles(props)

	return (
		<div className={classes.containerCards}>
			<div className={classes.card}>
				<img src="/gatsby-icon.svg" className={classes.image} />
				<Grid container justify="center">
					<Grid item xs={6} className={classes.titleCard}>
						<span className={classes.title}>Gatbsy</span>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}
