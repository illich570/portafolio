'use client'

import Image from 'next/image'
import { Grid, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useTranslations } from 'next-intl'
import { Link } from 'react-scroll'

const useStyles = makeStyles()((theme) => ({
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
		WebkitUserSelect: 'none',
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
		fontFamily: 'var(--font-alegreya), serif',
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
		WebkitUserSelect: 'none',
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
			maxWidth: '450px',
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
	containerWaves: {
		width: '100%',
		height: '80%',
		position: 'absolute',
		zIndex: -1,
		left: '0%',
		top: '5%',
		'@media (max-width: 450px)': {
			width: '300%',
		},
	},
	waves: {
		width: '100%',
		height: '100%',
	},
}))

export default function ParallaxCard() {
	const { classes } = useStyles()
	const t = useTranslations('parallax')

	return (
		<Grid
			alignItems="center"
			className={classes.containerParallax}
			container
			direction="column"
			justifyContent="center"
			size={{ xs: 12 }}
		>
			<div className={classes.containerWaves}>
				<Image alt="" className={classes.waves} fill priority sizes="100vw" src="/waves.svg" />
			</div>
			<Grid
				className={classes.cardParallax}
				container
				justifyContent="center"
				size={{ xs: 10, md: 7 }}
				spacing={0}
			>
				<Grid className={classes.whiteSectionCard} size={{ xs: 9, md: 4 }}>
					<Typography className={classes.greetingTitle} variant="h6">
						{t('greeting')}
					</Typography>
					<Typography align="center" className={classes.nameTitle} variant="h4">
						Illich Rada
					</Typography>
				</Grid>
				<Grid className={classes.redSectionCard} size={{ xs: 12, md: 8 }}>
					<Typography className={classes.paragraphCard} variant="h6">
						{t('paragraph')}
					</Typography>
				</Grid>
			</Grid>
			<Grid container justifyContent="center" size={{ xs: 12 }}>
				<Link smooth spy to="projects">
					<div className={classes.circleButton}>
						<KeyboardArrowDownIcon className={classes.arrowButton} />
					</div>
				</Link>
			</Grid>
		</Grid>
	)
}
