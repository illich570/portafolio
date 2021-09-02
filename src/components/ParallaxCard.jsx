import { Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { useTranslation } from 'next-i18next'
import { Link } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
	'@keyframes show': {
		'0%': {
			opacity: 0,
		},
		'100%': {
			opacity: 1,
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
	'@keyframes waves': {
		'0%': {
			transform: 'rotate(0deg)',
		},
		'100%': {
			transform: 'rotate(360deg)',
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
		userSelect: 'none',
		webkitUserSelect: 'none',
		MozUserSelect: 'none',
		msUserSelect: 'none',
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
		whiteSpace: 'nowrap',
		margin: '0 auto',
		animation: '$show 3s',
	},
	paragraphCard: {
		marginBottom: '0.5em',
		letterSpacing: '0.5px',
		lineHeight: '1.7em',
		fontSize: '1rem',
		'@media (min-width: 700px)': {
			marginBottom: '1em',
			fontSize: '1.10rem',
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
		marginTop: '1em',
		transition: 'all 0.5s 0s',
		zIndex: 2,
		'&:hover': {
			transform: 'scale(1.2,1.2)',
			backgroundColor: 'white',
		},
	},
	greetingTitle: {
		letterSpacing: '0.5px',
		'@media(min-width: 650px) and (max-width: 959px)': {
			textAlign: 'center',
			paddingRight: '7em',
		},
	},
	arrowButton: {
		userSelect: 'none',
		webkitUserSelect: 'none',
		MozUserSelect: 'none',
		msUserSelect: 'none',
		fontSize: '3em',
		color: 'white',
		transition: 'all 0.5s 0s',
		'&:hover': {
			color: theme.palette.primary.main,
			cursor: 'pointer',
			animation: '$moving-arrow 1s steps(30,end) infinite',
		},
	},
	squareWave: {
		zIndex: -1,
		overflow: 'hidden',
		width: '155em',
		height: '156em',
		backgroundColor: '#C4C4C4',
		position: 'absolute',
		top: '-80%',
		marginLeft: '-1250px',
		marginTop: '-1250px',
		left: '60%',
		borderRadius: '35%',
		animation: '$waves 15s linear infinite',
		'@media (max-width: 800px)': {
			top: '-120%',
			width: '80em',
			height: '80.5em',
			left: '-25%',
			marginLeft: '0px',
			marginTop: '0px',
		},
		'@media (max-width: 600px)': {
			top: '-80%',
			width: '65em',
			height: '66em',
			left: '-28%',
		},
		'@media (max-width: 450px)': {
			width: '65em',
			height: '66em',
			left: '-45%',
		},
		'@media (max-width: 380px) and (max-height: 670px)': {
			top: '-80%',
			left: '-70%',
		},
		'@media (max-width: 330px) and (max-height: 570px)': {
			width: '45em',
			height: '46em',
			top: '-35%',
			left: '-45%',
		},
	},
	containerParallax: {
		minHeight: '90vh',
		width: '100%',
		padding: '2em 0',
		marginTop: '4.1em',
		overflow: 'hidden',
		position: 'relative',
	},
	cardParallax: {
		backgroundColor: 'white',
		boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.4)',
		zIndex: 2,
		'@media (max-width: 960px)': {
			maxWidth: '450px'
		},
	},
	redSectionCard: {
		backgroundColor: theme.palette.primary.main,
		color: 'white',
		padding: '1em 2.5em',
		fontSize: '1em',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
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
	const { t } = useTranslation('parallax')

	return (
		<Grid
			alignItems="center"
			className={classes.containerParallax}
			container
			item
			justify="center"
			xs={12}
		>
			<div className={classes.squareWave}></div>
			<Grid className={classes.cardParallax} container item justify="center" md={7} xs={10}>
				<Grid className={classes.whiteSectionCard} item md={4} xs={9}>
					<Typography className={classes.greetingTitle} variant="h6">
						{t('greeting')}
					</Typography>
					<Typography align="center" className={classes.nameTitle} variant="h4">
						Illich Rada
					</Typography>
				</Grid>
				<Grid className={classes.redSectionCard} item md={8} xs={12}>
					<Typography className={classes.paragraphCard} variant="h6">
						{t('paragraph')}
					</Typography>
					{/* <Grid className={classes.containerButton} item xs={12}>
						<Link smooth spy to="projects">
							<Button className={classes.button} color="secondary" variant="outlined">
								{t('buttonParallax')}
							</Button>
						</Link>
					</Grid> */}
				</Grid>
			</Grid>
			<Grid container item justify="center" xs={12}>
				<Link smooth spy to="projects">
					<div className={classes.circleButton}>
						<KeyboardArrowDownIcon className={classes.arrowButton} />
					</div>
				</Link>
			</Grid>
		</Grid>
	)
}
