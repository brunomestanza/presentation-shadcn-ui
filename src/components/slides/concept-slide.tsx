'use client'

import { FileCode } from 'lucide-react'
import Image from 'next/image'
import { CodeEditor } from '@/components/ui/code-editor'
import type { SlideData } from '@/types/slide-types'

interface ConceptSlideProps {
	data: SlideData
}

export function ConceptSlide({ data }: ConceptSlideProps) {
	return (
		<div className="min-h-[400px] w-full flex flex-col gap-20">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 text-center break-words">
				{data.title}
			</h1>

			<div className="flex flex-col lg:flex-row gap-5 lg:gap-8 w-full max-w-full">
				<div className="w-full lg:flex-1 flex items-center justify-center">
					<div className="bg-zinc-900 p-5 lg:p-8 rounded border-l-4 border-primary w-fit min-w-[50%] box-border flex justify-between gap-20">
						<div>
							<h3 className="text-white mb-4 text-base md:text-lg lg:text-xl break-words">
								{data.conceptTitle}
							</h3>
							<ul className="list-none m-0 p-0 flex flex-col gap-2">
								{data.concepts?.map((concept) => (
									<li
										key={concept}
										className="py-1.5 text-zinc-300 relative pl-6 text-sm md:text-base leading-relaxed break-words before:content-['✓'] before:absolute before:left-0 before:text-emerald-500 before:font-bold"
									>
										{concept}
									</li>
								))}
							</ul>
						</div>
						{data.imageUrl && (
							<Image
								src={data.imageUrl}
								width={340}
								height={120}
								alt=""
								className="p-3"
							/>
						)}
					</div>
				</div>
				{data.code && (
					<div className="w-full lg:flex-1">
						<h3 className="text-white mb-4 text-base md:text-lg lg:text-xl">
							Exemplo Simples:
						</h3>
						<CodeEditor
							cursor
							writing={false}
							className="w-[640px] h-[480px]"
							lang="javascript"
							title="example.js"
							icon={<FileCode />}
							duration={10}
							delay={1}
							copyButton
							themes={{
								light: 'vitesse-light',
								dark: 'vitesse-dark',
							}}
						>
							{data.code}
						</CodeEditor>
					</div>
				)}
			</div>
		</div>
	)
}
