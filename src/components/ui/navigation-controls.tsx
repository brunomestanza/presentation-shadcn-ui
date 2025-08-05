'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

interface NavigationControlsProps {
	currentSlide: number
	totalSlides: number
	onPrevious: () => void
	onNext: () => void
}

export function NavigationControls({
	currentSlide,
	totalSlides,
	onPrevious,
	onNext,
}: NavigationControlsProps) {
	return (
		<nav className="flex items-center justify-center gap-4 md:gap-5 p-2.5 md:p-4 z-50 w-full max-w-full box-border">
			<button
				type="button"
				className="bg-transparent text-white border-none p-2 rounded-full cursor-pointer text-sm transition-all duration-300 flex items-center justify-center flex-shrink-0 hover:text-emerald-500 disabled:text-gray-600 disabled:cursor-not-allowed"
				onClick={onPrevious}
				disabled={currentSlide === 1}
			>
				<ChevronLeft size={16} />
			</button>

			<span className="font-semibold text-zinc-400 text-xs md:text-sm whitespace-nowrap">
				{currentSlide} / {totalSlides}
			</span>

			<button
				type="button"
				className="bg-transparent text-white border-none p-2 rounded-full cursor-pointer text-sm transition-all duration-300 flex items-center justify-center flex-shrink-0 hover:text-emerald-500 disabled:text-gray-600 disabled:cursor-not-allowed"
				onClick={onNext}
				disabled={currentSlide === totalSlides}
			>
				<ChevronRight size={16} />
			</button>
		</nav>
	)
}
