'use client'

import { Select } from '@base-ui/react/select'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { useTransition } from 'react'
import { ChevronDownIcon } from '@/components/icons'

export default function ChangeLanguage() {
	const locale = useLocale()
	const router = useRouter()
	const pathname = usePathname()
	const [isPending, startTransition] = useTransition()

	const handleChangeLanguage = (newLocale: string | null) => {
		if (!newLocale || newLocale === locale) {
			return
		}

		startTransition(() => {
			router.replace(pathname, { locale: newLocale })
		})
	}

	return (
		<div className="w-full sm:w-auto">
			<Select.Root disabled={isPending} value={locale} onValueChange={handleChangeLanguage}>
				<Select.Trigger className="relative inline-flex w-full items-center justify-between rounded-xl border-0 py-2 pr-8 pl-2 font-light text-primary uppercase outline-2 outline-offset-2 outline-primary disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
					<Select.Value />
					<Select.Icon>
						<ChevronDownIcon className="pointer-events-none absolute right-3 size-4 text-primary" />
					</Select.Icon>
				</Select.Trigger>
				<Select.Portal>
					<Select.Positioner sideOffset={8}>
						<Select.Popup className="z-60 overflow-hidden rounded-xl bg-white shadow-lg">
							<Select.List className="p-0 uppercase">
								{routing.locales.map((loc, index) => (
									<Select.Item
										className="cursor-pointer px-5 py-3 font-light outline-none data-[highlighted]:bg-primary data-[highlighted]:text-white data-[selected]:bg-primary data-[selected]:text-white"
										key={`${loc}_${index}`}
										value={loc}
									>
										<Select.ItemText>{loc}</Select.ItemText>
									</Select.Item>
								))}
							</Select.List>
						</Select.Popup>
					</Select.Positioner>
				</Select.Portal>
			</Select.Root>
		</div>
	)
}
