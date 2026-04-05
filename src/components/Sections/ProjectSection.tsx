'use client'

import ProjectCard from '@/components/ProjectCard'
import { Box, Grid, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import useIntersection from '@/hooks/useIntersection'
import { useTranslations } from 'next-intl'
import type { ProjectCardDTO } from '@/types/portfolio'

const useStyles = makeStyles()(() => ({
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

export type ProjectSectionProps = {
	dataCards: ProjectCardDTO[]
}

export default function ProjectSection({ dataCards }: ProjectSectionProps) {
	const { classes, cx } = useStyles()
	const thresholdValue = 0.12
	const { animated, elRef } = useIntersection({ threshold: thresholdValue })
	const t = useTranslations('projects')
	return (
		<Grid className={classes.container} container id="projects">
			<Grid size={{ xs: 12 }}>
				<Typography className={classes.containerTitle} variant="h3">
					{t('title')}
				</Typography>
			</Grid>
			<Grid size={{ xs: 12 }}>
				<Box
					ref={elRef}
					className={cx(classes.containerCards, animated && classes.containerCardsFadeIn)}
					sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}
				>
					{dataCards.map((element, index) => (
						<ProjectCard data={element} index={index} key={`abc_${index}`} />
					))}
				</Box>
			</Grid>
		</Grid>
	)
}
