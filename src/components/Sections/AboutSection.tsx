'use client'

import ButtonLink from '@/components/ui/ButtonLink'
import useIntersection from '@/hooks/useIntersection'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/cn'

export default function AboutSection() {
	const thresholdValue = 0.19
	const { animated, elRef } = useIntersection({ threshold: thresholdValue })
	const t = useTranslations('aboutSection')

	return (
		<section
			className="flex w-full scroll-pb-[100px] flex-col items-center justify-evenly overflow-hidden min-[700px]:flex-row min-[700px]:flex-wrap"
			id="about_me"
			ref={elRef}
		>
			<h2 className="mb-[1em] flex w-full items-center justify-center text-[2.6em] font-medium min-[701px]:text-5xl">
				{t('title')}
			</h2>
			<div
				className={cn(
					'w-9/12 opacity-0 transition-[opacity,transform] duration-[1500ms] min-[700px]:mb-[7em] md:w-4/12',
					animated ? 'translate-y-0 opacity-100' : 'translate-y-[150px]'
				)}
			>
				<p className="leading-[2] tracking-[0.5px]">{t('paragraph1')}</p>
				<div className="my-[1.8em] flex w-full items-center justify-center">
					<ButtonLink href={t('urlCV')} iconName="code" title={t('buttonCV')} variant="contained" />
				</div>
			</div>
			<div
				className={cn(
					'w-9/12 text-right opacity-0 transition-[opacity,transform] duration-[1500ms] min-[700px]:mt-[7em] md:w-4/12',
					animated ? 'translate-y-0 opacity-100' : '-translate-y-[150px]'
				)}
			>
				<p className="leading-[2] tracking-[0.5px]">{t('paragraph2')}</p>
				<div className="my-[1.8em] flex w-full items-center justify-center">
					<ButtonLink
						href={t('urlLinkedin')}
						iconName="code"
						title={t('buttonLinkedIn')}
						variant="contained"
					/>
				</div>
			</div>
		</section>
	)
}
