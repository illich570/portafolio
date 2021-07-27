import { useState, useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ButtonIcon from '@/components/ButtonIcon'
import useIntersection from '@/hooks/UseIntersection'
import { useTranslation } from 'next-i18next'
import handleIntersection from '@/utils/handleIntersection'
const useStyles = makeStyles(() => ({
	container: {
		overflow: 'hidden',
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		width: '100%',
		flexDirection: 'column',
		scrollPaddingBottom: '100px',
		'@media (min-width: 700px)': {
			flexDirection: 'row',
		},
	},
	containerTitle: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: '1em',
		'@media (max-width: 700px)': {
			fontSize: '2.6em',
		},
	},
	buttonContainer: {
		margin: '1.8em 0',
	},
	containerParagraph: {
		lineHeight: 2,
		letterSpacing: '0.5px',
	},
	lastParagraph: {
		textAlign: 'right',
		opacity: 0,
		transition: '1.5s',
		transform: ' translate(0,-150px)',
		'@media (min-width: 700px)': {
			marginTop: '7em',
		},
	},
	firstParagraph: {
		opacity: 0,
		transform: ' translate(0,150px)',
		transition: '1.5s',
		'@media (min-width: 700px)': {
			marginBottom: '7em',
		},
	},
	animationParagraph: {
		opacity: 1,
		transform: ' translate(0)',
	},
}))

export default function AboutSection() {
	const classes = useStyles()
	const thresholdValue = 0.19
	const { observerEntry, elRef } = useIntersection({ threshold: thresholdValue })
	const { t } = useTranslation('about')
	const [animated, setAnimated] = useState(false)

	useEffect(() => {
		const result = handleIntersection(observerEntry, thresholdValue)
		if (result !== undefined && result !== animated) {
			setAnimated(result)
			//eslint-disable-next-line
			console.log(result)
		}
	}, [observerEntry, animated])

	return (
		<Grid className={classes.container} container id="about_me" ref={elRef}>
			<Grid item xs={12}>
				<Typography className={classes.containerTitle} variant="h3">
					{t('title')}
				</Typography>
			</Grid>
			<Grid
				className={` ${classes.firstParagraph} ${animated ? classes.animationParagraph : ''}`}
				item
				md={4}
				xs={9}
			>
				<Typography className={classes.containerParagraph} variant="body1">
					{t('paragraph1')}
				</Typography>
				<Grid
					alignItems="center"
					className={classes.buttonContainer}
					container
					item
					justify="center"
					xs={12}
				>
					<a href={t('urlCV')} rel="noopener noreferrer" target="_blank">
						<ButtonIcon color="primary" icon="code" title={t('buttonCV')} variant="contained" />
					</a>
				</Grid>
			</Grid>
			<Grid
				className={`${classes.lastParagraph} ${animated ? classes.animationParagraph : ''}`}
				item
				md={4}
				xs={9}
			>
				<Typography className={classes.containerParagraph} variant="body1">
					{t('paragraph2')}
				</Typography>
				<Grid
					alignItems="center"
					className={classes.buttonContainer}
					container
					item
					justify="center"
					xs={12}
				>
					<a href={t('urlLinkedin')} rel="noopener noreferrer" target="_blank">
						<ButtonIcon
							color="primary"
							icon="code"
							title={t('buttonLinkedIn')}
							variant="contained"
						/>
					</a>
				</Grid>
			</Grid>
		</Grid>
	)
}
