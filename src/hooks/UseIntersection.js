import { useState, useEffect, useRef } from 'react'

export default function useIntersection(options) {
	const [observerEntry, setObserverEntry] = useState({})
	const elRef = useRef()

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => setObserverEntry(entries[0]), options)
		observer.observe(elRef.current)
		return () => observer.disconnect()
	}, [elRef])
	return { observerEntry, elRef }
}
