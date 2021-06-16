import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ButtonIcon from '../ButtonIcon/ButtonIcon'
import { useIntersection } from '../../hooks/UseIntersection'

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		justifyContent: 'space-around',
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
		marginBottom: '1em',
	},
	buttonContainer: {
		margin: '1.8em 0',
	},
	containerParagraph: {
		lineHeight: 2.8,
		letterSpacing: '1px',
	},
	lastParagraph: {
		textAlign: 'right',
		'@media (min-width: 700px)': {
			marginTop: '7em',
		},
	},
	animationParagraph: {
		animation: '$appear-paragraph .75s linear forwards',
	},
	'@keyframes appear-paragraph': {
		'0%': {
			opacity: 0,
			transform: ' translate(0,200px)',
		},
		'100%': {
			opacity: 1,
			transform: ' translate(0)',
		},
	},
	animationParagraphFade: {
		animation: '$appear-paragraph-fade .75s linear forwards',
	},
	'@keyframes appear-paragraph-fade': {
		'0%': {
			opacity: 1,
			transform: ' translate(0,0)',
		},
		'100%': {
			opacity: 0,
			transform: ' translate(0,-100px)',
		},
	},
	animationParagraphInverse: {
		animation: '$appear-paragraph-inverse .75s linear forwards',
	},
	'@keyframes appear-paragraph-inverse': {
		'0%': {
			opacity: 0,
			transform: ' translate(0,-200px)',
		},
		'100%': {
			opacity: 1,
			transform: ' translate(0)',
		},
	},
	animationParagraphInverseFade: {
		animation: '$appear-paragraph-inverse-fade .75s linear forwards',
	},
	'@keyframes appear-paragraph-inverse-fade': {
		'0%': {
			opacity: 1,
			transform: ' translate(0,0)',
		},
		'100%': {
			opacity: 0,
			transform: ' translate(0,200px)',
		},
	},
}))

export default function AboutSection(props) {
	const classes = useStyles()
	const { observerEntry, elRef } = useIntersection({ threshold: 0.35 })
	return (
		<Grid container className={classes.container} ref={elRef}>
			<Grid item xs={12}>
				<Typography variant="h3" id="about_me" className={classes.containerTitle}>
					About me
				</Typography>
			</Grid>
			<Grid
				item
				xs={9}
				md={3}
				className={`${
					observerEntry.isIntersecting ? classes.animationParagraph : classes.animationParagraphFade
				}`}
			>
				<Typography variant="body1" className={classes.containerParagraph}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam nobis, similique hic
					dignissimos quo placeat nesciunt soluta laudantium veritatis maxime similique hic
					dignissimos quo placeat nesciunt soluta laudantium veritatis maxime.
				</Typography>
				<Grid
					item
					xs={12}
					container
					justify="center"
					alignItems="center"
					className={classes.buttonContainer}
				>
					<ButtonIcon icon="code" variant="contained" color="primary" title="See example" />
				</Grid>
			</Grid>
			<Grid
				item
				xs={9}
				md={3}
				className={`${classes.lastParagraph} ${
					observerEntry.isIntersecting
						? classes.animationParagraphInverse
						: classes.animationParagraphInverseFade
				}`}
			>
				<Typography variant="body1" className={classes.containerParagraph}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam nobis, similique hic
					dignissimos quo placeat nesciunt soluta laudantium veritatis maxime similique hic
					dignissimos quo placeat nesciunt soluta laudantium veritatis maxime.
				</Typography>
				<Grid
					item
					xs={12}
					container
					justify="center"
					alignItems="center"
					className={classes.buttonContainer}
				>
					<ButtonIcon icon="code" variant="contained" color="primary" title="See example" />
				</Grid>
			</Grid>
		</Grid>
	)
}
