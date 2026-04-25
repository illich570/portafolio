'use client'

import ProjectCard from '@/components/ProjectCard'
import useIntersection from '@/hooks/useIntersection'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/cn'
import type { ProjectCardDTO } from '@/types/portfolio'

export type ProjectSectionProps = {
	dataCards: ProjectCardDTO[]
}

export default function ProjectSection({ dataCards }: ProjectSectionProps) {
	const thresholdValue = 0.12
	const { animated, elRef } = useIntersection({ threshold: thresholdValue })
	const t = useTranslations('projects')
	return (
		<section
			className="flex scroll-pb-[100px] flex-col items-center justify-center overflow-hidden transition-all duration-500 min-[700px]:flex-row"
			id="projects"
		>
			<div className="w-full">
				<h2 className="my-[0.8em] flex items-center justify-center text-[2.6em] tracking-[1px] min-[701px]:text-5xl">
					{t('title')}
				</h2>
			</div>
			<div className="w-full">
				<div
					ref={elRef}
					className={cn(
						'flex translate-x-[200px] flex-wrap items-center justify-center overflow-hidden opacity-0 transition duration-1000',
						animated && 'translate-x-0 opacity-100'
					)}
				>
					{dataCards.map((element, index) => (
						<ProjectCard data={element} index={index} key={`abc_${index}`} />
					))}
				</div>
			</div>
		</section>
	)
}
