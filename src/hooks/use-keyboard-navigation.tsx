'use client'

import { useEffect } from 'react'

interface UseKeyboardNavigationProps {
	nextSlide: () => void
	previousSlide: () => void
}

export function useKeyboardNavigation({
	nextSlide,
	previousSlide,
}: UseKeyboardNavigationProps) {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowLeft':
					previousSlide()
					break
				case 'ArrowRight':
				case ' ':
					e.preventDefault()
					nextSlide()
					break
			}
		}

		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [nextSlide, previousSlide])
}
