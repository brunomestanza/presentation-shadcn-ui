export interface SlideData {
	id: number
	type:
		| 'title'
		| 'presenter'
		| 'concept'
		| 'terminal'
		| 'pyramid'
		| 'code-example'
		| 'use-cases'
		| 'practice'
		| 'qa'
		| 'quiz'
		| 'frameworks'
		| 'patterns'
	title: string
	subtitle?: string
	conceptTitle?: string
	concepts?: string[]
	code?: string
	implementation?: string
	codeToTest?: string
	testCode?: string
	useCases?: UseCase[]
	exercises?: Exercise[]
	quizQuestions?: QuizQuestion[]
	questions?: Question[]
	frameworks?: Framework[]
	patterns?: PatternCategory[]
	imageUrl?: string
	presenter?: PresenterInfo
}

export interface PresenterInfo {
	name: string
	role: string
	company: string
	bio: string
	imageUrl: string
	linkedin: string
	github: string
	email?: string
	website?: string
	achievements: string[]
	expertise: string[]
}

export interface UseCase {
	icon: string
	title: string
	problem: string
	solution: string
	example: string
}

export interface Exercise {
	title: string
	description: string
	code: string
}

export interface Question {
	icon: string
	question: string
	text: string
}

export interface QuizQuestion {
	question: string
	options: string[]
	correctAnswer: number
	explanation: string
}

export interface Framework {
	technology: string
	name: string
	description: string
	link: string
	features: string[]
}

export interface PatternCategory {
	category: string
	items: PatternItem[]
}

export interface PatternItem {
	name: string
	icon: string
	description: string
	details: string[]
	example?: string
}
