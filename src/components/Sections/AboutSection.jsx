import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ButtonIcon from '@/components/ButtonIcon'
import useIntersection from '@/hooks/UseIntersection'
import { useTranslation } from 'next-i18next'

const useStyles = makeStyles(() => ({
	container: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '100%',
		flexDirection: 'column',
		scrollPaddingBottom: '10px',
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

export default function AboutSection() {
	const classes = useStyles()
	const { observerEntry, elRef } = useIntersection({ threshold: 0.35 })
	const { t } = useTranslation('about')
	return (
		<Grid className={classes.container} container id="about_me" ref={elRef}>
			<Grid item xs={12}>
				<Typography className={classes.containerTitle} variant="h3">
					{t('title')}
				</Typography>
			</Grid>
			<Grid
				className={`${
					observerEntry.isIntersecting ? classes.animationParagraph : classes.animationParagraphFade
				}`}
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
					<ButtonIcon color="primary" icon="code" title={t('buttonCV')} variant="contained" />
				</Grid>
			</Grid>
			<Grid
				className={`${classes.lastParagraph} ${
					observerEntry.isIntersecting
						? classes.animationParagraphInverse
						: classes.animationParagraphInverseFade
				}`}
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
					<ButtonIcon color="primary" icon="code" title={t('buttonLinkedIn')} variant="contained" />
				</Grid>
			</Grid>
		</Grid>
	)
}
