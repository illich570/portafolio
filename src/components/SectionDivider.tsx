export default function SectionDivider() {
	return (
		<div className="z-[-5] my-10 flex items-center justify-center">
			<div className="w-3/12 md:w-5/12 lg:w-4/12">
				<hr className="flex w-full border-2 border-primary bg-primary" />
			</div>
			<div className="flex w-3/12 items-center justify-center md:w-1/12 lg:w-1/12">
				<div className="h-10 w-10 -rotate-45 border-4 border-primary" />
			</div>
			<div className="w-3/12 md:w-5/12 lg:w-4/12">
				<hr className="flex w-full border-2 border-primary bg-primary" />
			</div>
		</div>
	)
}
