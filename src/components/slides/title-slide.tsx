import { FlaskConical } from 'lucide-react'
import type { SlideData } from '@/types/slide-types'

interface TitleSlideProps {
	data: SlideData
}

export function TitleSlide({ data }: TitleSlideProps) {
	return (
		<div className="text-center h-full relative overflow-hidden min-h-[400px] flex flex-col items-center justify-center gap-8 md:gap-10 w-full p-5 box-border">
			<div className="flex justify-center items-center">
				<FlaskConical className="text-emerald-500 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 animate-pulse" />
			</div>

			<div className="relative z-10 w-full max-w-full">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2.5 break-words leading-tight">
					{data.title}
				</h1>
				<h2 className="text-xl md:text-2xl lg:text-3xl text-emerald-500 mb-4 break-words">
					com JavaScript
				</h2>
				<p className="text-base md:text-lg lg:text-xl text-zinc-400 mb-8 break-words leading-relaxed max-w-[90%] mx-auto">
					{data.subtitle}
				</p>
			</div>
		</div>
	)
}
