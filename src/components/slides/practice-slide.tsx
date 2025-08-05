'use client'

import { FileCode } from 'lucide-react'
import type { SlideData } from '@/types/slide-types'
import { CodeEditor } from '../ui/code-editor'

interface PracticeSlideProps {
	data: SlideData
}

export function PracticeSlide({ data }: PracticeSlideProps) {
	return (
		<div className="min-h-[400px] w-[50%] mx-auto">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 text-center break-words">
				{data.title}
			</h1>

			<div className="w-full max-w-full mx-auto">
				<div className="text-center mb-5 text-base md:text-lg lg:text-xl text-zinc-400 break-words">
					<p>
						Hora de escrever seus próprios testes! Experimente estes exercícios:
					</p>
				</div>

				<div className="grid gap-5 md:gap-6 mb-5 w-full">
					{data.exercises?.map((exercise) => (
						<div
							key={exercise.title}
							className="bg-zinc-900 p-5 md:p-6 rounded border-l-4 border-emerald-500 w-full box-border"
						>
							<h3 className="text-white mb-2.5 text-base md:text-lg lg:text-xl break-words">
								{exercise.title}
							</h3>
							<p className="text-zinc-400 mb-4 leading-relaxed text-sm md:text-base break-words">
								{exercise.description}
							</p>
							<CodeEditor
								cursor
								writing={false}
								className="w-full h-[480px]"
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
								{exercise.code}
							</CodeEditor>
						</div>
					))}
				</div>

				<div className="bg-zinc-900 p-5 md:p-6 rounded border-l-4 border-emerald-500 w-full box-border">
					<h3 className="text-white mb-4 text-base md:text-lg lg:text-xl">
						💡 Dicas:
					</h3>
					<ul className="list-none m-0 p-0">
						<li className="py-1.5 text-zinc-400 relative pl-6 text-sm md:text-base break-words before:content-['💡'] before:absolute before:left-0">
							Use{' '}
							<code className="bg-black text-emerald-500 px-1.5 py-0.5 rounded font-mono text-xs md:text-sm break-words">
								console.log()
							</code>{' '}
							para ver resultados
						</li>
						<li className="py-1.5 text-zinc-400 relative pl-6 text-sm md:text-base break-words before:content-['💡'] before:absolute before:left-0">
							Teste cenários de sucesso e falha
						</li>
						<li className="py-1.5 text-zinc-400 relative pl-6 text-sm md:text-base break-words before:content-['💡'] before:absolute before:left-0">
							Comece simples, depois adicione mais casos de teste
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
