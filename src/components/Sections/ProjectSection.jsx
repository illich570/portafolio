import { useEffect, useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useIntersection from '@/hooks/UseIntersection'
import { useTranslation } from 'next-i18next'
import handleIntersection from '@/utils/handleIntersection'

const useStyles = makeStyles(() => ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
		flexDirection: 'column',
		scrollPaddingBottom: '100px',
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
		'@media (max-width: 700px)': {
			fontSize: '2.6em',
		},
	},
	containerCards: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
		transition: '1s',
		transform: 'translate(200px)',
		opacity: 0,
	},
	containerCardsFadeIn: {
		transform: 'translate(0)',
		opacity: 1,
	},
}))

export default function ProjectSection({ dataCards }) {
	const classes = useStyles()
	const thresholdValue = 0.2
	const { observerEntry, elRef } = useIntersection({ threshold: thresholdValue })
	const [animated, setAnimated] = useState(false)

	useEffect(() => {
		const result = handleIntersection(observerEntry, thresholdValue)
		if (result !== undefined && result !== animated) {
			setAnimated(result)
		}
	}, [observerEntry, animated])
	const { t } = useTranslation('projects')
	return (
		<Grid className={`${classes.container}`} container id="projects">
			<Grid item xs={12}>
				<Typography className={classes.containerTitle} variant="h3">
					{t('title')}
				</Typography>
			</Grid>
			<Grid
				className={`${classes.containerCards} ${animated ? classes.containerCardsFadeIn : ''}`}
				container
				item
				ref={elRef}
				xs={12}
			>
				{dataCards.map((element, index) => (
					<ProjectCard data={element} index={index} key={`abc_${index}`} />
				))}
			</Grid>
		</Grid>
	)
}
