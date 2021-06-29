import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ButtonIcon from '@/components/ButtonIcon'

const useStyles = makeStyles(() => ({
	card: {
		maxWidth: '320px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.4)',
		borderRadius: '15px',
		margin: '1.5em',
		'@media (min-width: 1084px)': {
			marginTop: (props) => (props.index === 1 ? '5em' : '0'),
		},
	},
	containerImage: {
		width: '100%',
	},
	image: {
		width: '100%',
		maxHeight: '220px',
		borderTopLeftRadius: '15px',
		borderTopRightRadius: '15px',
	},
	titleCard: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		letterSpacing: '1px',
	},
	paragraphCard: {
		margin: '1em 0',
	},
	paragraph: {
		lineHeight: 1.8,
		letterSpacing: '1px',
	},
	buttonContainer: {
		margin: '0.8em 0',
	},
	containerBodyCard: {
		paddingBottom: '1.5em',
	},
}))

export default function ProjectCard(props) {
	const classes = useStyles(props)

	return (
		<div className={classes.card}>
			<div className={classes.containerImage}>
				<img className={classes.image} src="/testImage.png" />
			</div>
			<Grid alignItems="center" className={classes.containerBodyCard} container justify="center">
				<Grid item xs={10}>
					<Typography className={classes.titleCard} variant="h5">
						Lorem.dev
					</Typography>
				</Grid>
				<Grid className={classes.paragraphCard} item xs={10}>
					<Typography className={classes.paragraph} variant="body2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim
					</Typography>
				</Grid>
				<Grid
					alignItems="center"
					className={classes.buttonContainer}
					container
					item
					justify="center"
					xs={10}
				>
					<ButtonIcon color="primary" icon="code" title="View on Github" variant="contained" />
				</Grid>
				<Grid
					alignItems="center"
					className={classes.buttonContainer}
					container
					item
					justify="center"
					xs={10}
				>
					<ButtonIcon color="primary" icon="code" title="See example" variant="outlined" />
				</Grid>
			</Grid>
		</div>
	)
}
