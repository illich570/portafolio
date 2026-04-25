'use client'

import { useTranslations } from 'next-intl'
import { GitHubIcon, LinkedInIcon, MailIcon, TwitterIcon } from '@/components/icons'

export default function Footer() {
	const t = useTranslations('footer')
	const date = new Date().getFullYear()
	const iconClassName =
		'm-[0.3em] size-10 transition-transform duration-200 ease-in hover:scale-150'

	return (
		<footer className="flex flex-wrap items-center justify-between bg-primary px-8 py-4 text-white">
			<div className="flex flex-[1_1_280px] flex-col items-start justify-center min-[550px]:items-center">
				<p>{`© ${date} Illich Rada. ${t('side')} `}</p>
			</div>
			<div className="flex flex-[1_1_200px] items-center justify-center">
				<a className="text-white" href={t('email')} rel="noreferrer noopener" target="_blank">
					<MailIcon className={iconClassName} />
				</a>
				<a className="text-white" href={t('urlLinkedin')} rel="noreferrer noopener" target="_blank">
					<LinkedInIcon className={iconClassName} />
				</a>
				<a className="text-white" href={t('urlGithub')} rel="noreferrer noopener" target="_blank">
					<GitHubIcon className={iconClassName} />
				</a>
				<a className="text-white" href={t('urlTwitter')} rel="noreferrer noopener" target="_blank">
					<TwitterIcon className={iconClassName} />
				</a>
			</div>
		</footer>
	)
}
