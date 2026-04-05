import { useState, useEffect, useRef } from 'react'

export default function useIntersection(options) {
	const threshold = options?.threshold ?? 0
	const [observerEntry, setObserverEntry] = useState({})
	const elRef = useRef()

	useEffect(() => {
		const el = elRef.current
		if (!el) return undefined
		const observer = new IntersectionObserver((entries) => setObserverEntry(entries[0]), {
			threshold,
		})
		observer.observe(el)
		return () => observer.disconnect()
	}, [threshold])

	return { observerEntry, elRef }
}
