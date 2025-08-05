'use client'

import { useEffect, useState } from 'react'
import type { SlideData } from '@/types/slide-types'

interface UseCasesSlideProps {
	data: SlideData
}

export function UseCasesSlide({ data }: UseCasesSlideProps) {
	const [animatedCards, setAnimatedCards] = useState<number[]>([])

	useEffect(() => {
		const timers =
			data.useCases?.map((_, index) =>
				setTimeout(() => {
					setAnimatedCards((prev) => [...prev, index])
				}, index * 200),
			) || []

		return () => timers.forEach(clearTimeout)
	}, [data.useCases])

	return (
		<div className="min-h-[400px] w-full">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 text-center break-words">
				{data.title}
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 xl:gap-8 mt-5 w-full max-w-full">
				{data.useCases?.map((useCase, index) => (
					<div
						key={useCase.title}
						className={`
              bg-zinc-900 p-5 md:p-6 xl:p-8 rounded text-center border border-zinc-700 
              transition-all duration-300 cursor-pointer opacity-0 translate-y-8 w-full box-border
              hover:border-emerald-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10
              ${animatedCards.includes(index) ? 'opacity-100 translate-y-0' : ''}
            `}
					>
						<div className="text-4xl md:text-5xl xl:text-6xl mb-4">
							{useCase.icon}
						</div>
						<h3 className="text-white mb-4 text-base md:text-lg lg:text-xl break-words">
							{useCase.title}
						</h3>
						<p className="text-zinc-400 mb-2.5 leading-relaxed text-sm md:text-base break-words">
							<strong>Problema:</strong> {useCase.problem}
						</p>
						<p className="text-zinc-400 mb-2.5 leading-relaxed text-sm md:text-base break-words">
							<strong>Solução:</strong> {useCase.solution}
						</p>
						<div className="bg-black text-emerald-500 p-2.5 rounded font-mono text-xs md:text-sm mt-4 break-words overflow-wrap-anywhere">
							<code>{useCase.example}</code>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
