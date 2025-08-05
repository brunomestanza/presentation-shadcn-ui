'use client'

import { useEffect, useState } from 'react'
import type { SlideData } from '@/types/slide-types'
import { CodeExampleSlide } from './slides/code-example-slide'
import { ConceptSlide } from './slides/concept-slide'
import { FrameworksSlide } from './slides/frameworks-slide'
import { PatternsSlide } from './slides/patterns-slide'
import { PracticeSlide } from './slides/practice-slide'
import { PresenterSlide } from './slides/presenter-slide'
import { PyramidSlide } from './slides/pyramid-slide'
import { QASlide } from './slides/qa-slide'
import { QuizSlide } from './slides/quiz-slide'
import { TitleSlide } from './slides/title-slide'
import { UseCasesSlide } from './slides/use-cases-slide'

interface SlideRendererProps {
	slide: SlideData
	isActive: boolean
}

export function SlideRenderer({ slide, isActive }: SlideRendererProps) {
	const [isAnimating, setIsAnimating] = useState(false)

	useEffect(() => {
		if (isActive) {
			setIsAnimating(true)
			const timer = setTimeout(() => setIsAnimating(false), 600)
			return () => clearTimeout(timer)
		}
	}, [isActive])

	const renderSlideContent = () => {
		switch (slide.type) {
			case 'title':
				return <TitleSlide data={slide} />
			case 'presenter':
				return <PresenterSlide data={slide} />
			case 'concept':
				return <ConceptSlide data={slide} />
			case 'pyramid':
				return <PyramidSlide data={slide} />
			case 'code-example':
				return <CodeExampleSlide data={slide} />
			case 'use-cases':
				return <UseCasesSlide data={slide} />
			case 'practice':
				return <PracticeSlide data={slide} />
			case 'quiz':
				return <QuizSlide data={slide} />
			case 'frameworks':
				return <FrameworksSlide data={slide} />
			case 'patterns':
				return <PatternsSlide data={slide} />
			case 'qa':
				return <QASlide data={slide} />
			default:
				return <ConceptSlide data={slide} />
		}
	}

	return (
		<div
			className={`
      w-full h-full mx-auto opacity-0 transition-all duration-600 ease-out
      ${isActive ? 'opacity-100 translate-x-0' : ''}
      ${isAnimating ? 'animate-slideIn' : ''}
    `}
		>
			<div className="w-full h-full max-h-[calc(100vh-120px)] p-4 md:p-10 overflow-y-auto overflow-x-hidden text-white box-border max-w-full">
				{renderSlideContent()}
			</div>
		</div>
	)
}
