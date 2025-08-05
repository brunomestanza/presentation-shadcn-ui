'use client'

import { FileCode, PlusIcon } from 'lucide-react'
import { Accordion as AccordionPrimitive } from 'radix-ui'
import { useEffect, useState } from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
} from '@/components/ui/accordion'
import type { SlideData } from '@/types/slide-types'
import { CodeEditor } from '../ui/code-editor'

interface PatternsSlideProps {
	data: SlideData
}

export function PatternsSlide({ data }: PatternsSlideProps) {
	const [animatedCategories, setAnimatedCategories] = useState<number[]>([])

	useEffect(() => {
		const timers =
			data.patterns?.map((_, index) =>
				setTimeout(() => {
					setAnimatedCategories((prev) => [...prev, index])
				}, index * 200),
			) || []

		return () => timers.forEach(clearTimeout)
	}, [data.patterns])

	return (
		<div className="min-h-[400px] w-[50%] mx-auto">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 text-center break-words">
				{data.title}
			</h1>

			<div className="text-center mb-8">
				<p className="text-base md:text-lg lg:text-xl text-zinc-400 break-words">
					Padrões e práticas essenciais para escrever testes melhores e mais
					sustentáveis:
				</p>
			</div>

			<div className="flex flex-col gap-8 mb-8">
				{data.patterns?.map((category, categoryIndex) => (
					<div
						key={category.category}
						className={`
              opacity-0 translate-y-8 transition-all duration-500
              ${animatedCategories.includes(categoryIndex) ? 'opacity-100 translate-y-0' : ''}
            `}
					>
						<h2 className="flex items-center gap-3 text-xl md:text-2xl text-emerald-500 mb-5 font-semibold">
							<span className="text-2xl md:text-3xl">
								{category.category === 'Padrões de Teste' ? '🎯' : '⭐'}
							</span>
							{category.category}
						</h2>

						<Accordion
							type="single"
							collapsible
							className="w-full space-y-2"
							defaultValue="3"
						>
							{category.items.map((item) => (
								<AccordionItem
									value={item.name}
									key={item.name}
									className="bg-background has-focus-visible:border-ring has-focus-visible:ring-ring/50 rounded-md border px-4 py-1 outline-none last:border-b has-focus-visible:ring-[3px]"
								>
									<AccordionPrimitive.Header className="flex">
										<AccordionPrimitive.Trigger className="ocus-visible:ring-0 flex flex-1 items-center justify-between rounded-md py-2 text-left text-[18px] leading-6 font-semibold transition-all outline-none [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
											{item.icon} {item.name}
											<PlusIcon
												size={16}
												className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
												aria-hidden="true"
											/>
										</AccordionPrimitive.Trigger>
									</AccordionPrimitive.Header>
									<AccordionContent className="text-muted-foreground pb-2">
										{item.description}
										<ul className="list-none m-0 p-0 flex flex-col gap-2 my-4">
											{item.details.map((detail) => (
												<li
													key={detail}
													className="text-gray-200 text-sm md:text-base leading-relaxed relative pl-5 break-words before:content-['•'] before:absolute before:left-0 before:text-emerald-500 before:font-bold"
												>
													{detail}
												</li>
											))}
										</ul>
										{item.example && (
											<CodeEditor
												cursor
												writing={false}
												className="w-[640px] h-[270px]"
												lang="javascript"
												title="code-to-test.js"
												icon={<FileCode />}
												duration={10}
												delay={1}
												copyButton
												themes={{
													light: 'vitesse-light',
													dark: 'vitesse-dark',
												}}
											>
												{item.example}
											</CodeEditor>
										)}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				))}
			</div>

			<div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 md:p-8 mt-12">
				<h3 className="text-emerald-500 text-lg md:text-xl mb-5 text-center font-semibold">
					🎯 Principais Conclusões
				</h3>
				<div className="grid gap-4 md:grid-cols-2">
					<div className="text-gray-200 text-sm md:text-base leading-relaxed p-3 bg-emerald-500/5 rounded-md border-l-4 border-emerald-500 break-words">
						<strong className="text-emerald-500">Comece simples:</strong> Inicie
						com padrões básicos como AAA e gradualmente adote técnicas mais
						avançadas
					</div>
					<div className="text-gray-200 text-sm md:text-base leading-relaxed p-3 bg-emerald-500/5 rounded-md border-l-4 border-emerald-500 break-words">
						<strong className="text-emerald-500">Consistência:</strong> Use os
						mesmos padrões e convenções de nomenclatura em toda a equipe
					</div>
					<div className="text-gray-200 text-sm md:text-base leading-relaxed p-3 bg-emerald-500/5 rounded-md border-l-4 border-emerald-500 break-words">
						<strong className="text-emerald-500">Manutenibilidade:</strong>{' '}
						Escreva testes que sejam fáceis de ler, entender e modificar
					</div>
					<div className="text-gray-200 text-sm md:text-base leading-relaxed p-3 bg-emerald-500/5 rounded-md border-l-4 border-emerald-500 break-words">
						<strong className="text-emerald-500">Automação:</strong> Integre
						testes no seu fluxo de trabalho de desenvolvimento e pipeline de
						CI/CD
					</div>
				</div>
			</div>
		</div>
	)
}
