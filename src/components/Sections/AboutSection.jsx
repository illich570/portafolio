'use client'

import { useState, useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import ButtonIcon from '@/components/ButtonIcon'
import useIntersection from '@/hooks/UseIntersection'
import { useTranslations } from 'next-intl'
import handleIntersection from '@/utils/handleIntersection'

const useStyles = makeStyles()(() => ({
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
			flexWrap: 'wrap',
		},
	},
	containerTitle: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: '1em',
		width: '100%',
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
	const { classes } = useStyles()
	const thresholdValue = 0.19
	const { observerEntry, elRef } = useIntersection({ threshold: thresholdValue })
	const t = useTranslations('aboutSection')
	const [animated, setAnimated] = useState(false)

	useEffect(() => {
		const result = handleIntersection(observerEntry, thresholdValue)
		if (result !== undefined && result !== animated) {
			setAnimated(result)
		}
	}, [observerEntry, animated])

	return (
		<Box className={classes.container} id="about_me" ref={elRef}>
			<Typography className={classes.containerTitle} variant="h3">
				{t('title')}
			</Typography>
			<Grid
				className={`${classes.firstParagraph} ${animated ? classes.animationParagraph : ''}`}
				size={{ xs: 9, md: 4 }}
			>
				<Typography className={classes.containerParagraph} variant="body1">
					{t('paragraph1')}
				</Typography>
				<Grid
					alignItems="center"
					className={classes.buttonContainer}
					container
					justifyContent="center"
					size={{ xs: 12 }}
				>
					<a href={t('urlCV')} rel="noopener noreferrer" target="_blank">
						<ButtonIcon color="primary" icon="code" title={t('buttonCV')} variant="contained" />
					</a>
				</Grid>
			</Grid>
			<Grid
				className={`${classes.lastParagraph} ${animated ? classes.animationParagraph : ''}`}
				size={{ xs: 9, md: 4 }}
			>
				<Typography className={classes.containerParagraph} variant="body1">
					{t('paragraph2')}
				</Typography>
				<Grid
					alignItems="center"
					className={classes.buttonContainer}
					container
					justifyContent="center"
					size={{ xs: 12 }}
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
		</Box>
	)
}
