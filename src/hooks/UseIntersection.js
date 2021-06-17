import { useState, useEffect, useRef } from 'react'

export default function useIntersection(options) {
	const [observerEntry, setEntry] = useState({})
	const elRef = useRef()

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => setEntry(entries[0]), options)
		observer.observe(elRef.current)
		return () => observer.disconnect()
	}, [elRef])
	return { observerEntry, elRef }
}
