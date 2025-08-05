'use client'

import { useCallback, useState } from 'react'

export function usePresentationState(totalSlides: number) {
	const [currentSlide, setCurrentSlide] = useState(1)

	const nextSlide = useCallback(() => {
		setCurrentSlide((prev) => Math.min(prev + 1, totalSlides))
	}, [totalSlides])

	const previousSlide = useCallback(() => {
		setCurrentSlide((prev) => Math.max(prev - 1, 1))
	}, [])

	const goToSlide = useCallback(
		(slideNumber: number) => {
			setCurrentSlide(Math.max(1, Math.min(slideNumber, totalSlides)))
		},
		[totalSlides],
	)

	return {
		currentSlide,
		totalSlides,
		nextSlide,
		previousSlide,
		goToSlide,
	}
}
