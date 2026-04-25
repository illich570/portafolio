'use client'

import Image from 'next/image'
import type { TechCardDTO } from '@/types/portfolio'

export type TechCardProps = {
	data: TechCardDTO
}

export default function TechCard({ data }: TechCardProps) {
	return (
		<div className="flex items-center justify-center">
			<div className="m-3 flex h-[130px] w-[130px] flex-col items-center justify-center rounded-[15px] p-1 shadow-[1.4px_0_4px_4px_rgba(0,0,0,0.08)] transition-[border,box-shadow] duration-200 hover:border-l-8 hover:border-primary hover:shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] min-[416px]:m-4 min-[416px]:h-[180px] min-[416px]:w-[180px] min-[416px]:p-2 md:m-8 md:p-4">
				<Image
					alt={data.title}
					className="mb-4 h-[85px] w-[85px]"
					height={86}
					src={data.image.url}
					width={86}
				/>
				<div className="flex items-center justify-center text-center">
					<span className="m-0 text-base tracking-[1px] min-[700px]:text-xl">{data.title}</span>
				</div>
			</div>
		</div>
	)
}
