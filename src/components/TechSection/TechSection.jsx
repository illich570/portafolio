import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TechCard from '../TechCard/TechCard'
import Slider from '../Slider/Slider'

const useStyles = makeStyles(() => ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		flexDirection: 'column',
		'@media (min-width: 700px)': {
			flexDirection: 'row',
		},
	},
	containerTitle: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '1em 0',
		marginTop: '0',
	},
	containerCards: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		maxWidth: '1000px',
	},
}))

const test = [1, 2, 3, 4, 5, 6, 7, 8]

export default function TechSection(props) {
	const classes = useStyles()
	return (
		<Grid container className={classes.container}>
			<Grid item xs={12}>
				<Typography variant="h3" id="projects" className={classes.containerTitle}>
					Tech Stack
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Slider>
					{test.map((element, index) => (
						<TechCard index={index} key={`abc_${index}`} />
					))}
				</Slider>
			</Grid>
		</Grid>
	)
}
