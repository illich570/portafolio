'use client'

import { Drawer } from '@base-ui/react/drawer'
import { useEffect, useState } from 'react'
import { useMessages, useTranslations } from 'next-intl'
import ChangeLanguage from '@/components/ChangeLanguage'
import { MenuIcon } from '@/components/icons'
import { cn } from '@/lib/cn'
import { Link } from 'react-scroll'

type NavbarMessages = {
	navbar: {
		links: Array<{ link: string; ref: string }>
	}
}

const linkClassName =
	'relative px-4 text-primary hover:cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-[0.2em] before:w-0 before:bg-black before:transition-all before:duration-200 hover:before:w-full'

function useHideOnScroll() {
	const [hidden, setHidden] = useState(false)

	useEffect(() => {
		let previousY = window.scrollY

		const handleScroll = () => {
			const currentY = window.scrollY
			setHidden(currentY > previousY && currentY > 24)
			previousY = currentY
		}

		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return hidden
}

export default function Nav() {
	const [showSidebar, setShowSidebar] = useState(false)
	const hidden = useHideOnScroll()
	const t = useTranslations('navbar')
	const messages = useMessages() as NavbarMessages
	const links = messages.navbar.links

	return (
		<header
			className={cn(
				'fixed top-0 right-0 left-0 z-50 bg-white shadow-md transition-transform duration-300',
				hidden && '-translate-y-full'
			)}
		>
			<nav className="flex flex-row items-center justify-between px-8 py-3 sm:px-12">
				<div className="flex w-1/2 items-center justify-center sm:w-1/3 md:w-1/2">
					<h2 className="text-2xl font-bold text-primary">{t('header')}</h2>
				</div>
				<div className="w-1/2 sm:w-2/3 md:w-1/2">
					<div className="hidden flex-row items-center justify-center sm:flex">
						{links.map((element, index) => (
							<Link
								className={linkClassName}
								key={`${element.link}_${index}`}
								smooth
								spy
								to={element.ref}
							>
								<span className="text-xl font-medium">{element.link}</span>
							</Link>
						))}
						<ChangeLanguage />
					</div>
					<div className="flex flex-row justify-end sm:hidden">
						<button
							aria-label={t('header')}
							className="inline-flex text-primary"
							type="button"
							onClick={() => setShowSidebar(true)}
						>
							<MenuIcon className="h-8 w-8" />
						</button>
					</div>
				</div>
				<Drawer.Root open={showSidebar} swipeDirection="right" onOpenChange={setShowSidebar}>
					<Drawer.Portal>
						<Drawer.Backdrop className="fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
						<Drawer.Popup className="fixed top-0 right-0 z-50 flex h-dvh w-72 flex-col justify-center bg-white p-4 shadow-xl transition-transform duration-300 data-[ending-style]:translate-x-full data-[starting-style]:translate-x-full">
							<div className="flex h-full flex-col items-center justify-center gap-4 p-4">
								{links.map((element, index) => (
									<Link
										className={linkClassName}
										key={`${element.link}_${index}`}
										smooth
										spy
										to={element.ref}
										onClick={() => setShowSidebar(false)}
									>
										<span className="text-xl font-medium">{element.link}</span>
									</Link>
								))}
							</div>
							<div className="flex flex-col items-center justify-center gap-3 p-4">
								<ChangeLanguage />
								<p className="text-center text-sm text-primary">&copy;2021 {t('header')}</p>
							</div>
						</Drawer.Popup>
					</Drawer.Portal>
				</Drawer.Root>
			</nav>
		</header>
	)
}
