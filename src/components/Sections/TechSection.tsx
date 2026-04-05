'use client'

import { Box, Typography } from '@mui/material'
import TechCard from '@/components/TechCard'
import type { TechCardDTO } from '@/types/portfolio'

export type TechSectionProps = {
	dataCards: TechCardDTO[]
	title: string
}

export default function TechSection({ dataCards, title }: TechSectionProps) {
	return (
		<Box
			sx={{
				overflow: 'hidden',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				margin: '4em 0',
				flexDirection: 'column',
				scrollPaddingBottom: '100px',
				'@media (min-width: 700px)': {
					flexDirection: 'row',
					flexWrap: 'wrap',
				},
			}}
		>
			<Typography
				id="tech"
				sx={{
					display: 'flex',
					justifyContent: 'center',
					textAlign: 'center',
					alignItems: 'center',
					margin: '1em 0',
					marginTop: 0,
					width: '100%',
					'@media (max-width: 700px)': {
						fontSize: '2.6em',
					},
				}}
				variant="h3"
			>
				{title}
			</Typography>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					maxWidth: '1000px',
					flexWrap: 'wrap',
					margin: '0.75em 0',
					'@media (max-width: 450px)': {
						margin: '1.75em 0',
					},
				}}
			>
				{dataCards.map((element, index) => (
					<TechCard data={element} key={`abc_${index}`} />
				))}
			</Box>
		</Box>
	)
}
