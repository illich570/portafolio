export default function handleIntersection(entry, threshold) {
	let isWindow = typeof 'window' !== 'undefined'
	if (entry !== undefined) {
		if (entry.intersectionRatio >= threshold) {
			return true
		} else if (isWindow && entry.target !== undefined) {
			if (entry.target.offsetTop > window.scrollY) {
				return false
			}
		}
	}
}
