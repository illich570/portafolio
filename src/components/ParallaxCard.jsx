import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

const useStyles = makeStyles((theme) => ({
	'@keyframes typing': {
		'0%': {
			width: '0',
		},
		'100%': {
			width: '85%',
		},
	},
	'@keyframes moving-arrow': {
		'0%': {
			transform: 'translateY(0px)',
		},
		'50%': {
			transform: 'translateY(10px)',
		},
		'100%': {
			transform: 'translateY(0px)',
		},
	},
	'@keyframes blink-caret': {
		'0%': {
			borderColor: 'transparent',
		},
		'50%': {
			borderColor: `${theme.palette.primary.main}`,
		},
		'100%': {
			borderColor: 'transparent',
		},
	},
	button: {
		color: 'white',
		borderColor: 'white',
		border: '2.5px solid',
		borderRadius: '5px',
		background: 'linear-gradient(to right, #fff,#fff)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '100% 0',
		transition: 'all 0.5s 0s',
		'&:hover': {
			backgroundSize: '100% 100%',
			borderColor: 'black',
			color: 'black',
			border: '2.5px solid',
		},
	},
	nameTitle: {
		fontFamily: 'Alegreya',
		letterSpacing: '1px',
		overflow: 'hidden',
		borderRight: `.1em solid ${theme.palette.primary.main}`,
		whiteSpace: 'nowrap',
		margin: '0 auto',
		animation: '$typing 2.5s steps(15,end) alternate 3, $blink-caret .75s step-end infinite',
	},
	paragraphCard: {
		marginBottom: '0.5em',
		letterSpacing: '1px',
		fontSize: '1rem',
		'@media (min-width: 700px)': {
			marginBottom: '1em',
			fontSize: '1.25rem',
		},
	},
	circleButton: {
		backgroundColor: theme.palette.primary.main,
		height: '45px',
		width: '45px',
		borderRadius: '50%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '0.5em',
		transition: 'all 0.5s 0s',
		zIndex: 2,
		'&:hover': {
			transform: 'scale(1.2,1.2)',
			backgroundColor: 'white',
		},
	},
	greetingTitle: {
		letterSpacing: '1px',
		'@media(min-width: 650px) and (max-width: 959px)': {
			textAlign: 'center',
			paddingRight: '7em',
		},
	},
	arrowButton: {
		fontSize: '3em',
		color: 'white',
		transition: 'all 0.5s 0s',
		'&:hover': {
			color: theme.palette.primary.main,
			cursor: 'pointer',
			animation: '$moving-arrow 1s steps(30,end) infinite',
		},
	},
	wave: {
		width: '100%',
		position: 'absolute',
		bottom: '1%',
	},
	containerParallax: {
		backgroundColor: '#C4C4C4',
		minHeight: '89vh',
		width: '100%',
		padding: '2em 0',
		marginTop: '4.1em',
	},
	cardParallax: {
		backgroundColor: 'white',
		boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.4)',
		zIndex: 2,
	},
	redSectionCard: {
		backgroundColor: theme.palette.primary.main,
		color: 'white',
		padding: '1em 2.5em',
		fontSize: '1em',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		'@media (min-width: 960px)': {
			padding: '1.2em 4em',
			minHeight: '410px',
		},
	},
	whiteSectionCard: {
		padding: '0.5em',
		'@media (min-width: 960px)': {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
		},
	},
	containerButton: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}))

export default function ParallaxCard() {
	const classes = useStyles()
	return (
		<Grid
			alignItems="center"
			className={classes.containerParallax}
			container
			item
			justify="center"
			xs={12}
		>
			<Grid className={classes.cardParallax} container item justify="center" md={7} xs={10}>
				<Grid className={classes.whiteSectionCard} item md={4} xs={9}>
					<Typography className={classes.greetingTitle} variant="h6">
						Hello,I&apos;m
					</Typography>
					<Typography align="center" className={classes.nameTitle} variant="h4">
						Illich Rada
					</Typography>
				</Grid>
				<Grid className={classes.redSectionCard} item md={8} xs={12}>
					<Typography className={classes.paragraphCard} variant="h6">
						I&apos;m a
					</Typography>
					<Typography className={classes.paragraphCard} variant="h6">
						Front-end Developer.
					</Typography>
					<Typography className={classes.paragraphCard} variant="h6">
						I love coding, and make great websites using front-end technologies.
					</Typography>
					<Typography className={classes.paragraphCard} variant="h6">
						I want to tell you a bit more about me.
					</Typography>
					<Grid className={classes.containerButton} item xs={12}>
						<Button className={classes.button} color="secondary" variant="outlined">
							See my work
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid container item justify="center" xs={12}>
				<div className={classes.circleButton}>
					<KeyboardArrowDownIcon className={classes.arrowButton} />
				</div>
			</Grid>
			<figure className={classes.wave}>
				<img alt="waves" src="/wave.svg" />
			</figure>
		</Grid>
	)
}