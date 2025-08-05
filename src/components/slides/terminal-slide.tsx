import { AnimatedSpan, Terminal, TypingAnimation } from '@/components/terminal'
import type { SlideData } from '@/types/slide-types'

interface TitleSlideProps {
	data: SlideData
}

export function TerminalSlide({ data }: TitleSlideProps) {
	return (
		<div className="min-h-[75%] w-full">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-15 text-center break-words">
				{data.title}
			</h1>

			<Terminal className="w-full max-w-[65%] mx-auto h-full max-h-full">
				<TypingAnimation>&gt; npm run tests</TypingAnimation>

				<AnimatedSpan delay={1500} className="text-slate-300">
					<span>[1/3] Create user</span>
				</AnimatedSpan>

				<AnimatedSpan delay={2000} className="text-green-500">
					<span>✔ user can create an account</span>
				</AnimatedSpan>

				<AnimatedSpan delay={2500} className="text-green-500">
					<span>
						✔ user cannot create an account with an already registered email
					</span>
				</AnimatedSpan>

				<AnimatedSpan delay={3000} className="text-green-500">
					<span>✔ user password cannot have less than 6 characters</span>
				</AnimatedSpan>

				<AnimatedSpan delay={3500} className="text-slate-300">
					<span>[2/3] Update user</span>
				</AnimatedSpan>

				<AnimatedSpan delay={4000} className="text-green-500">
					<span>✔ the user can change his email address</span>
				</AnimatedSpan>

				<AnimatedSpan delay={4500} className="text-green-500">
					<span>✔ the user can change his username</span>
				</AnimatedSpan>

				<AnimatedSpan delay={5000} className="text-green-500">
					<span>✔ the user can change his password</span>
				</AnimatedSpan>

				<AnimatedSpan delay={5500} className="text-slate-300">
					<span>[3/3] Create an todo</span>
				</AnimatedSpan>

				<AnimatedSpan delay={6000} className="text-green-500">
					<span>✔ the user can create an todo</span>
				</AnimatedSpan>

				<AnimatedSpan delay={6500} className="text-green-500">
					<span>✔ the user cannot create an todo without been logged in</span>
				</AnimatedSpan>

				<AnimatedSpan delay={7000} className="text-red-500">
					<span>x the user cannot update an todo of another user</span>
				</AnimatedSpan>

				<AnimatedSpan delay={7500} className="flex items-center gap-4 mt-6">
					<span className="text-muted-foreground">Test Files</span>
					<span className="text-red-500">1 passed (1)</span>
				</AnimatedSpan>

				<AnimatedSpan delay={7500} className="flex items-center gap-4">
					<span className="text-muted-foreground">Tests</span>
					<span className="text-red-500">8 passed (9)</span>
				</AnimatedSpan>

				<AnimatedSpan delay={7500} className="flex items-center gap-4">
					<span className="text-muted-foreground">Start at</span>
					<span className="text-red-500">15:18:26</span>
				</AnimatedSpan>

				<AnimatedSpan delay={7500} className="flex items-center gap-4">
					<span className="text-muted-foreground">Duration</span>
					<span className="text-red-500">16.91</span>
				</AnimatedSpan>

				<TypingAnimation delay={7500} className="text-muted-foreground mt-4">
					To rerun, press R.
				</TypingAnimation>
			</Terminal>
		</div>
	)
}
