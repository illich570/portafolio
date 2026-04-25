'use client'

import TechCard from '@/components/TechCard'
import type { TechCardDTO } from '@/types/portfolio'

export type TechSectionProps = {
	dataCards: TechCardDTO[]
	title: string
}

export default function TechSection({ dataCards, title }: TechSectionProps) {
	return (
		<section className="my-16 flex w-full scroll-pb-[100px] flex-col items-center justify-center overflow-hidden min-[700px]:flex-row min-[700px]:flex-wrap">
			<h2
				className="mt-0 mb-4 flex w-full items-center justify-center text-center text-[2.6em] font-medium min-[701px]:text-5xl"
				id="tech"
			>
				{title}
			</h2>
			<div className="my-7 flex max-w-[1000px] flex-wrap items-center justify-center min-[451px]:my-3">
				{dataCards.map((element, index) => (
					<TechCard data={element} key={`abc_${index}`} />
				))}
			</div>
		</section>
	)
}
