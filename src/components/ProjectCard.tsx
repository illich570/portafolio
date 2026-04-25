'use client'

import Image from 'next/image'
import ButtonLink from '@/components/ui/ButtonLink'
import { cn } from '@/lib/cn'
import { useTranslations } from 'next-intl'
import type { ProjectCardDTO } from '@/types/portfolio'

export type ProjectCardProps = {
	data: ProjectCardDTO
	index?: number
}

export default function ProjectCard({ data, index = 0 }: ProjectCardProps) {
	const t = useTranslations('projects')
	const imgUrl = data.localizations?.[0]?.image?.url

	return (
		<article
			className={cn(
				'm-6 flex max-h-[550px] min-h-[550px] max-w-[320px] flex-col items-center rounded-[15px] shadow-[0_8px_10px_rgba(0,0,0,0.4)]',
				index === 1 && 'min-[1084px]:mt-20'
			)}
		>
			{imgUrl ? (
				<div className="w-full">
					<Image
						alt={data.title}
						className="max-h-[220px] w-full rounded-t-[15px]"
						height={220}
						src={imgUrl}
						width={320}
					/>
				</div>
			) : null}
			<div className="flex flex-col items-center justify-center min-[330px]:pb-6">
				<div className="w-10/12">
					<h3 className="flex h-12 items-center justify-center text-center text-2xl tracking-[1px]">
						{data.title}
					</h3>
				</div>
				<div className="my-4 flex h-28 w-9/12 items-center max-[330px]:my-9">
					<p className="text-sm leading-[1.8] tracking-[0.5px]">{data.description}</p>
				</div>
				<div className="my-2 flex w-10/12 items-center justify-center">
					{data.githubUrl !== 'N' && (
						<ButtonLink
							href={data.githubUrl}
							iconName="code"
							rel="noopener noreferrer"
							target="_blank"
							title={t('buttonAction')}
							variant="contained"
						/>
					)}
				</div>
				<div className="my-2 flex w-10/12 items-center justify-center">
					<ButtonLink
						href={data.exampleUrl}
						iconName="code"
						rel="noopener noreferrer"
						target="_blank"
						title={t('buttonExample')}
						variant="outlined"
					/>
				</div>
			</div>
		</article>
	)
}
