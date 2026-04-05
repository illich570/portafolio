export default function handleIntersection(
	entry: IntersectionObserverEntry | undefined,
	threshold: number
): boolean | undefined {
	const isWindow = typeof window !== 'undefined'
	if (entry !== undefined) {
		if (entry.intersectionRatio >= threshold) {
			return true
		} else if (isWindow && entry.target !== undefined) {
			const target = entry.target as HTMLElement
			if (target.offsetTop > window.scrollY) {
				return false
			}
		}
	}
	return undefined
}
