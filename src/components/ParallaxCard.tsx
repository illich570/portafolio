'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from 'react-scroll'
import { ChevronDownIcon } from '@/components/icons'

export default function ParallaxCard() {
	const t = useTranslations('parallax')

	return (
		<section className="relative mt-[4.1em] flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden py-8">
			<div className="absolute top-[5%] left-0 -z-10 h-4/5 w-full max-[450px]:w-[300%]">
				<Image alt="" className="h-full w-full" fill priority sizes="100vw" src="/waves.svg" />
			</div>
			<div className="z-10 flex w-10/12 max-w-[450px] flex-wrap justify-center bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.4)] md:w-7/12 md:max-w-none">
				<div className="w-9/12 p-2 md:flex md:w-4/12 md:flex-col md:items-center md:justify-center min-[650px]:max-[959px]:pr-28 min-[650px]:max-[959px]:text-center">
					<p className="text-xl tracking-[0.5px]">{t('greeting')}</p>
					<h1 className="mx-auto animate-[show_3s] whitespace-nowrap text-center font-alegreya text-4xl tracking-[1px]">
						Illich Rada
					</h1>
				</div>
				<div className="flex w-full flex-col items-center justify-center bg-primary px-10 py-4 text-white md:min-h-[410px] md:w-8/12 md:px-16 md:py-5">
					<p className="mb-2 text-base leading-[1.7em] tracking-[0.5px] min-[700px]:mb-4 min-[700px]:text-[1.1rem]">
						{t('paragraph')}
					</p>
				</div>
			</div>
			<div className="flex w-full justify-center">
				<Link smooth spy to="projects">
					<div className="mt-4 flex size-[45px] items-center justify-center rounded-full bg-primary transition-all duration-500 hover:scale-120 hover:bg-white">
						<ChevronDownIcon className="size-12 select-none text-white transition-all duration-500 hover:animate-[moving-arrow_1s_steps(30,end)_infinite] hover:cursor-pointer hover:text-primary" />
					</div>
				</Link>
			</div>
		</section>
	)
}
