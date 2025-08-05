'use client'

import { useEffect, useState } from 'react'
import type { SlideData } from '@/types/slide-types'

interface QASlideProps {
	data: SlideData
}

export function QASlide({ data }: QASlideProps) {
	const [animatedQuestions, setAnimatedQuestions] = useState<number[]>([])

	useEffect(() => {
		const timers =
			data.questions?.map((_, index) =>
				setTimeout(() => {
					setAnimatedQuestions((prev) => [...prev, index])
				}, index * 150),
			) || []

		return () => timers.forEach(clearTimeout)
	}, [data.questions])

	const handleQuestionClick = (index: number) => {
		const card = document.querySelector(
			`[data-question="${index}"]`,
		) as HTMLElement
		if (card) {
			card.style.animation = 'bounce 0.6s ease'
			setTimeout(() => {
				card.style.animation = ''
			}, 600)
		}
	}

	return (
		<div className="min-h-[400px] w-full">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 text-center break-words">
				{data.title}
			</h1>

			<div className="text-center w-full">
				<div className="mb-8 text-base md:text-lg lg:text-xl text-zinc-400 break-words">
					<p>Vamos discutir o que aprendemos! Pense sobre essas perguntas:</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5 md:gap-6 mb-8 w-full max-w-full">
					{data.questions?.map((question, index) => (
						<button
							type="button"
							key={question.question}
							data-question={index}
							className={`
                bg-zinc-900 p-5 md:p-6 rounded transition-all duration-300 cursor-pointer 
                border border-zinc-700 opacity-0 translate-y-8 w-full box-border
                hover:border-emerald-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10
                ${animatedQuestions.includes(index) ? 'opacity-100 translate-y-0' : ''}
              `}
							onClick={() => handleQuestionClick(index)}
						>
							<div className="text-3xl md:text-4xl lg:text-5xl mb-4">
								{question.icon}
							</div>
							<h3 className="text-white mb-2.5 text-base md:text-lg lg:text-xl break-words">
								{question.question}
							</h3>
							<p className="text-zinc-400 leading-relaxed text-sm md:text-base break-words">
								{question.text}
							</p>
						</button>
					))}
				</div>

				<div className="bg-zinc-900 p-5 md:p-8 rounded border-l-4 border-emerald-500 w-full box-border my-20">
					<h3 className="text-white mb-2.5 text-base md:text-lg lg:text-xl break-words">
						🎉 Ótimo trabalho aprendendo sobre testes automatizados!
					</h3>
					<p className="text-zinc-400 text-base md:text-lg lg:text-xl leading-relaxed break-words">
						Lembre-se: Comece pequeno com testes unitários, depois construa até
						testes de integração e interface.
					</p>
				</div>
			</div>
		</div>
	)
}
