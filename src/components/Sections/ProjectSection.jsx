import ProjectCard from '@/components/ProjectCard'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useIntersection from '@/hooks/UseIntersection'

const useStyles = makeStyles(() => ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		flexDirection: 'column',
		transition: 'all 0.5s ease',
		'@media (min-width: 700px)': {
			flexDirection: 'row',
		},
	},
	containerTitle: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '0.8em 0',
		letterSpacing: '1px',
	},
	containerCards: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	animationContainer: {
		animation: '$appear-card .75s linear forwards',
	},
	'@keyframes appear-card': {
		'0%': {
			opacity: 0,
			transform: ' translate(200px)',
		},
		'100%': {
			opacity: 1,
			transform: ' translate(0)',
		},
	},
	animationContainerFade: {
		animation: '$appear-card-fade .75s linear forwards',
	},
	'@keyframes appear-card-fade': {
		'0%': {
			opacity: 1,
			transform: ' translate(0)',
		},
		'100%': {
			opacity: 0,
			transform: ' translate(-200px)',
		},
	},
}))

const test = [1, 2, 3]

export default function ProjectSection() {
	const classes = useStyles()
	const { observerEntry, elRef } = useIntersection({ threshold: 0.2 })
	return (
		<Grid className={`${classes.container}`} container ref={elRef}>
			<Grid item xs={12}>
				<Typography className={classes.containerTitle} id="projects" variant="h3">
					Projects
				</Typography>
			</Grid>
			<Grid
				className={`${classes.containerCards} ${
					observerEntry.isIntersecting ? classes.animationContainer : classes.animationContainerFade
				}`}
				container
				item
				xs={12}
			>
				{test.map((element, index) => (
					<ProjectCard index={index} key={`abc_${index}`} />
				))}
			</Grid>
		</Grid>
	)
}