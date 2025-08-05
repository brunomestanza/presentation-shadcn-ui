'use client'

import { CheckCircle, ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { SlideData } from '@/types/slide-types'

interface FrameworksSlideProps {
	data: SlideData
}

export function FrameworksSlide({ data }: FrameworksSlideProps) {
	const [animatedFrameworks, setAnimatedFrameworks] = useState<number[]>([])

	useEffect(() => {
		const timers =
			data.frameworks?.map((_, index) =>
				setTimeout(() => {
					setAnimatedFrameworks((prev) => [...prev, index])
				}, index * 100),
			) || []

		return () => timers.forEach(clearTimeout)
	}, [data.frameworks])

	const handleFrameworkClick = (link: string) => {
		window.open(link, '_blank', 'noopener,noreferrer')
	}

	return (
		<div className="min-h-[400px] w-full">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 text-center break-words">
				{data.title}
			</h1>

			<div className="text-center mb-8">
				<p className="text-base md:text-lg lg:text-xl text-zinc-400 break-words">
					Escolha o framework de teste certo para sua stack de tecnologia:
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 mb-8 w-full max-w-full">
				{data.frameworks?.map((framework, index) => (
					<button
						type="button"
						key={framework.name}
						className={`
              bg-zinc-900 border border-zinc-700 rounded-lg p-5 md:p-6 cursor-pointer 
              transition-all duration-300 opacity-0 translate-y-8 relative overflow-hidden flex items-start flex-col
              hover:border-emerald-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10
              before:absolute before:top-0 before:left-0 before:right-0 before:h-1 
              before:bg-gradient-to-r before:from-emerald-500 before:to-teal-600 
              before:scale-x-0 before:transition-transform before:duration-300
              hover:before:scale-x-100
              ${animatedFrameworks.includes(index) ? 'opacity-100 translate-y-0' : ''}
            `}
						onClick={() => handleFrameworkClick(framework.link)}
					>
						<div className="flex justify-between items-center mb-4 gap-3">
							<div className="bg-emerald-500 text-black px-3 py-1 rounded-xl text-xs md:text-sm font-semibold uppercase tracking-wide">
								{framework.technology}
							</div>
							<ExternalLink
								className="text-zinc-400 transition-colors duration-300 group-hover:text-emerald-500"
								size={16}
							/>
						</div>

						<h3 className="text-lg md:text-xl text-white mb-2.5 font-semibold break-words">
							{framework.name}
						</h3>
						<p className="text-zinc-400 mb-5 leading-relaxed text-sm md:text-base break-words">
							{framework.description}
						</p>

						<div className="mb-5 flex flex-col items-start">
							<h4 className="text-white text-sm md:text-base mb-2.5 font-semibold">
								Recursos Principais:
							</h4>
							<ul className="list-none m-0 p-0 flex flex-col gap-1.5">
								{framework.features.map((feature) => (
									<li
										key={feature}
										className="flex items-center gap-2 text-gray-200 text-xs md:text-sm break-words"
									>
										<CheckCircle
											className="text-emerald-500 flex-shrink-0"
											size={14}
										/>
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="flex items-center justify-center gap-2 bg-transparent text-emerald-500 border border-emerald-500 px-4 py-2 rounded-md text-xs md:text-sm font-medium transition-all duration-300 mt-auto hover:bg-emerald-500/10 hover:-translate-y-0.5">
							<span>Saiba Mais</span>
							<ExternalLink size={14} />
						</div>
					</button>
				))}
			</div>

			<div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 md:p-8 my-20 max-w-[50%] mx-auto">
				<h3 className="text-emerald-500 mb-5 text-lg md:text-xl text-center font-semibold">
					💡 Escolhendo o Framework Certo
				</h3>
				<div className="grid gap-4 md:grid-cols-2">
					<div className="text-gray-200 text-sm md:text-base leading-relaxed p-3 bg-emerald-500/5 rounded-md border-l-4 border-emerald-500 break-words">
						<strong className="text-emerald-500">Considere sua stack:</strong>{' '}
						Escolha frameworks que se integrem bem com suas ferramentas
						existentes
					</div>
					<div className="text-gray-200 text-sm md:text-base leading-relaxed p-3 bg-emerald-500/5 rounded-md border-l-4 border-emerald-500 break-words">
						<strong className="text-emerald-500">Expertise da equipe:</strong>{' '}
						Escolha frameworks que sua equipe possa aprender e manter
						efetivamente
					</div>
					<div className="text-gray-200 text-sm md:text-base leading-relaxed p-3 bg-emerald-500/5 rounded-md border-l-4 border-emerald-500 break-words">
						<strong className="text-emerald-500">Suporte da comunidade:</strong>{' '}
						Procure por comunidades ativas e boa documentação
					</div>
					<div className="text-gray-200 text-sm md:text-base leading-relaxed p-3 bg-emerald-500/5 rounded-md border-l-4 border-emerald-500 break-words">
						<strong className="text-emerald-500">Comece simples:</strong> Inicie
						com testes unitários básicos e gradualmente adicione testes mais
						complexos
					</div>
				</div>
			</div>
		</div>
	)
}
