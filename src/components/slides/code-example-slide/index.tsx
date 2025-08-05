'use client'

import type { SlideData } from '@/types/slide-types'
import { TripleCodeBlock } from './triple-code-block'

interface CodeExampleSlideProps {
	data: SlideData
}

export function CodeExampleSlide({ data }: CodeExampleSlideProps) {
	return (
		<div className="min-h-[400px] w-full">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 text-center break-words">
				{data.title}
			</h1>

			<div className="flex flex-col xl:flex-row gap-5 xl:gap-8 w-full max-w-full">
				<div className="w-full xl:flex-1">
					{data.implementation && data.codeToTest && data.testCode ? (
						<TripleCodeBlock
							implementation={data.implementation}
							codeToTest={data.codeToTest}
							testCode={data.testCode}
						/>
					) : (
						<div>Dados de implementação ausentes</div>
					)}
				</div>
			</div>
		</div>
	)
}
