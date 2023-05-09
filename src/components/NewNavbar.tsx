'use client'
import { tv } from 'tailwind-variants'
import { useTranslation } from 'next-i18next'

const header = tv({
	base: 'w-full h-14',
})

const navbar = tv({
	base: 'container flex justify-end bg-red-300  px-8 mx-auto',
})

const logo = tv({
	base: 'text-2xl font-bold text-red-700 mr-auto',
})
export default function NewNavbar() {
	const { t } = useTranslation('navbar')
	const links = t('links', { returnObjects: true })
	return (
		<header className={header()}>
			<nav className={navbar()}>
				<div className={logo()}>{t('header')}</div>
			</nav>
		</header>
	)
}
