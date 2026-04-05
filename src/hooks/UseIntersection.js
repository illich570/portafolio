import { useState, useEffect, useRef } from 'react'
import handleIntersection from '@/utils/handleIntersection'

export default function useIntersection({ threshold: thresholdValue }) {
	const [animated, setAnimated] = useState(false)
	const elRef = useRef(null)

	useEffect(() => {
		const el = elRef.current
		if (!el) return undefined
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0]
				const result = handleIntersection(entry, thresholdValue)
				if (result !== undefined) {
					setAnimated((prev) => (result !== prev ? result : prev))
				}
			},
			{ threshold: thresholdValue }
		)
		observer.observe(el)
		return () => observer.disconnect()
	}, [thresholdValue])

	return { animated, elRef }
}
