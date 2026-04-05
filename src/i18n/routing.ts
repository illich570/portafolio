import { defineRouting } from 'next-intl/routing'

export const LOCALES = ['es', 'en'] as const
export type AppLocale = (typeof LOCALES)[number]

export function isSupportedLocale(locale: string): locale is AppLocale {
	return (LOCALES as readonly string[]).includes(locale)
}

export const routing = defineRouting({
	locales: [...LOCALES],
	defaultLocale: 'es',
	localePrefix: 'as-needed',
})
