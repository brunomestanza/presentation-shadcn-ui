'use client'

import { SlideRenderer } from '@/components/slide-renderer'
import { NavigationControls } from '@/components/ui/navigation-controls'
import { Progress } from '@/components/ui/progress'
import { useKeyboardNavigation } from '@/hooks/use-keyboard-navigation'
import { usePresentationState } from '@/hooks/use-presentation-state'
import { slidesData } from '@/lib/slides-data'

export default function PresentationPage() {
	const { currentSlide, totalSlides, nextSlide, previousSlide } =
		usePresentationState(slidesData.length)

	useKeyboardNavigation({ nextSlide, previousSlide })

	return (
		<div className="w-screen h-screen bg-black overflow-hidden flex justify-center items-center">
			<div className="w-full h-full flex items-center justify-center">
				<SlideRenderer slide={slidesData[currentSlide - 1]} isActive={true} />
			</div>

			<div className="absolute bottom-0 left-0 w-full p-5 flex flex-col gap-2.5 md:gap-4">
				<NavigationControls
					currentSlide={currentSlide}
					totalSlides={totalSlides}
					onPrevious={previousSlide}
					onNext={nextSlide}
				/>

				<Progress value={(currentSlide / totalSlides) * 100} />
			</div>
		</div>
	)
}
