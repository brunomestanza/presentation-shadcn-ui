'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { SlideData } from '@/types/slide-types'

interface PyramidSlideProps {
	data: SlideData
}

export function PyramidSlide({ data }: PyramidSlideProps) {
	const [isAnimated, setIsAnimated] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsAnimated(true)
		}, 500)

		return () => clearTimeout(timer)
	}, [])

	const pyramidLevels = [
		{
			name: 'Testes de Interface',
			description: 'Mais lentos • Simulam o uso do usuário',
			className:
				'w-40 sm:w-52 md:w-64 lg:w-72 bg-gradient-to-br from-red-500 to-red-600',
			delay: 1200,
		},
		{
			name: 'Testes de Integração',
			description: 'Médios • Testam componentes juntos',
			className:
				'w-48 sm:w-64 md:w-80 lg:w-96 bg-gradient-to-br from-amber-500 to-amber-600',
			delay: 600,
		},
		{
			name: 'Testes Unitários',
			description: 'Mais rápidos • Testam funções individuais',
			className: 'w-64 sm:w-80 md:w-96 lg:w-[480px] bg-emerald-500',
			delay: 0,
		},
	]

	return (
		<div className="text-center w-full">
			<div className="w-[65%] mx-auto">
				<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 break-words">
					{data.title}
				</h1>

				<div className="w-full max-w-full mx-auto px-2.5 md:px-5 box-border">
					<div className="mb-5 text-base md:text-lg lg:text-xl text-zinc-400 break-words">
						<p>Os testes são organizados em uma estrutura de pirâmide:</p>
					</div>

					<div className="flex gap-2 justify-between items-center mx-10">
						<div className="flex flex-col items-center my-8 md:my-10 gap-5">
							{pyramidLevels.map((level) => (
								<div
									key={level.name}
									className={`
                  flex items-center justify-center rounded text-black font-semibold text-center
                  transition-all duration-700 ease-out opacity-0 translate-y-12 scale-75
                  h-16 md:h-20 min-w-[150px] max-w-[90%] p-2.5 box-border
                  ${level.className}
                  ${isAnimated ? 'opacity-100 translate-y-0 scale-100' : ''}
                `}
									style={{
										animationDelay: isAnimated ? `${level.delay}ms` : '0ms',
									}}
								>
									<div className="text-center">
										<h4 className="text-sm md:text-base lg:text-lg mb-1 break-words">
											{level.name}
										</h4>
										<p className="text-xs md:text-sm opacity-90 break-words">
											{level.description}
										</p>
									</div>
								</div>
							))}
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
			</div>
		</div>
	)
}
