'use client'

export type ContactSectionProps = {
	preamble: string
	actionLabel: string
}

export default function ContactSection({ preamble, actionLabel }: ContactSectionProps) {
	return (
		<section className="my-40 flex items-center justify-center">
			<h2 className="w-10/12 text-center text-3xl font-medium" id="contact_me">
				{preamble}
				<address className="inline not-italic">
					<a
						className="ml-1 text-primary underline"
						href="mailto:illich570@gmail.com"
						rel="noreferrer noopener"
						target="_blank"
					>
						{actionLabel}
					</a>
				</address>
			</h2>
		</section>
	)
}
