'use client'

import { useState } from 'react'
import type { QuizQuestion, SlideData } from '@/types/slide-types'
import { Button } from '../ui/button'

interface QuizSlideProps {
	data: SlideData
}

export function QuizSlide({ data }: QuizSlideProps) {
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
	const [showExplanation, setShowExplanation] = useState(false)
	const [score, setScore] = useState(0)
	const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
		new Array(data.questions?.length || 0).fill(false),
	)

	const questions = data.quizQuestions as QuizQuestion[]
	const currentQ = questions[currentQuestion]

	const handleAnswerSelect = (answerIndex: number) => {
		if (showExplanation) return
		setSelectedAnswer(answerIndex)
	}

	const handleSubmitAnswer = () => {
		if (selectedAnswer === null) return

		setShowExplanation(true)

		if (!answeredQuestions[currentQuestion]) {
			const newAnsweredQuestions = [...answeredQuestions]
			newAnsweredQuestions[currentQuestion] = true
			setAnsweredQuestions(newAnsweredQuestions)

			if (selectedAnswer === currentQ.correctAnswer) {
				setScore(score + 1)
			}
		}
	}

	const handleNextQuestion = () => {
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1)
			setSelectedAnswer(null)
			setShowExplanation(false)
		}
	}

	const handlePreviousQuestion = () => {
		if (currentQuestion > 0) {
			setCurrentQuestion(currentQuestion - 1)
			setSelectedAnswer(null)
			setShowExplanation(false)
		}
	}

	const resetQuiz = () => {
		setCurrentQuestion(0)
		setSelectedAnswer(null)
		setShowExplanation(false)
		setScore(0)
		setAnsweredQuestions(new Array(questions.length).fill(false))
	}

	const isQuizComplete = answeredQuestions.every((answered) => answered)

	return (
		<div className="min-h-[400px] w-full">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 text-center break-words">
				{data.title}
			</h1>

			<div className="w-full max-w-4xl mx-auto">
				<div className="flex justify-between items-center mb-4 flex-wrap gap-2.5">
					<div className="text-sm md:text-base text-emerald-500 font-semibold">
						Pergunta {currentQuestion + 1} de {questions.length}
					</div>
					<div className="text-sm md:text-base text-zinc-400 font-semibold">
						Pontuação: {score}/{answeredQuestions.filter(Boolean).length}
					</div>
				</div>

				<div className="w-full h-1.5 bg-zinc-700 rounded mb-6 overflow-hidden">
					<div
						className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-500 rounded"
						style={{
							width: `${((currentQuestion + 1) / questions.length) * 100}%`,
						}}
					/>
				</div>

				<div className="bg-zinc-900 rounded-lg p-6 md:p-8 border border-zinc-700 mb-5">
					<h3 className="text-lg md:text-xl lg:text-xl text-white mb-6 leading-relaxed break-words">
						{currentQ.question}
					</h3>

					<div className="flex flex-col gap-3 mb-6">
						{currentQ.options.map((option, index) => (
							<Button
								key={option}
								className={`
                  flex items-center gap-4 h-16 bg-black border-2 border-zinc-700 rounded-md 
                  text-white cursor-pointer transition-all duration-300 text-left w-full relative
                  hover:border-emerald-500 hover:bg-emerald-500/10
                  ${selectedAnswer === index ? 'border-emerald-500 bg-emerald-500/20' : ''}
                  ${showExplanation && index === currentQ.correctAnswer ? 'border-emerald-500 bg-emerald-500/30' : ''}
                  ${showExplanation && selectedAnswer === index && index !== currentQ.correctAnswer ? 'border-red-500 bg-red-500/30' : ''}
                  ${showExplanation ? 'cursor-not-allowed' : ''}
                `}
								onClick={() => handleAnswerSelect(index)}
								disabled={showExplanation}
							>
								<span
									className={`
                  flex items-center justify-center w-8 h-8 bg-zinc-700 rounded-full font-semibold text-sm flex-shrink-0
                  ${selectedAnswer === index ? 'bg-emerald-500 ' : ''}
                  ${showExplanation && index === currentQ.correctAnswer ? 'bg-emerald-500 text-black' : ''}
                  ${showExplanation && selectedAnswer === index && index !== currentQ.correctAnswer ? 'bg-red-500 text-white' : ''}
                `}
								>
									{String.fromCharCode(65 + index)}
								</span>
								<span className="flex-1 text-sm md:text-base leading-relaxed break-words">
									{option}
								</span>
								{showExplanation && index === currentQ.correctAnswer && (
									<span className="text-xl font-bold flex-shrink-0 text-emerald-500">
										✓
									</span>
								)}
								{showExplanation &&
									selectedAnswer === index &&
									index !== currentQ.correctAnswer && (
										<span className="text-xl font-bold flex-shrink-0 text-red-500">
											✗
										</span>
									)}
							</Button>
						))}
					</div>

					{showExplanation && (
						<div className="bg-emerald-500/10 border border-emerald-500 rounded-md p-5 mb-5 animate-fadeIn">
							<h4 className="text-emerald-500 mb-2.5 text-base md:text-lg">
								Explicação:
							</h4>
							<p className="text-gray-200 leading-relaxed text-sm md:text-base break-words">
								{currentQ.explanation}
							</p>
						</div>
					)}

					<div className="flex justify-center gap-4 flex-wrap">
						{!showExplanation ? (
							<Button
								className="bg-emerald-500 text-black border-none px-6 py-3 rounded-md font-semibold cursor-pointer transition-all duration-300 text-sm md:text-base hover:bg-teal-600 hover:-translate-y-0.5 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:transform-none"
								onClick={handleSubmitAnswer}
								disabled={selectedAnswer === null}
							>
								Enviar Resposta
							</Button>
						) : (
							<div className="flex gap-4 flex-wrap justify-center">
								<Button
									className="bg-transparent text-emerald-500 border border-emerald-500 px-5 py-2.5 rounded-md font-semibold cursor-pointer transition-all duration-300 text-xs md:text-sm hover:bg-emerald-500/10 disabled:text-gray-600 disabled:border-gray-600 disabled:cursor-not-allowed"
									onClick={handlePreviousQuestion}
									disabled={currentQuestion === 0}
								>
									← Anterior
								</Button>

								{currentQuestion < questions.length - 1 ? (
									<Button
										className="bg-transparent text-emerald-500 border border-emerald-500 px-5 py-2.5 rounded-md font-semibold cursor-pointer transition-all duration-300 text-xs md:text-sm hover:bg-emerald-500/10"
										onClick={handleNextQuestion}
									>
										Próxima →
									</Button>
								) : (
									<Button
										className="bg-amber-500 text-black border-none px-5 py-2.5 rounded-md font-semibold cursor-pointer transition-all duration-300 text-xs md:text-sm hover:bg-amber-600 hover:-translate-y-0.5"
										onClick={resetQuiz}
									>
										🔄 Reiniciar Quiz
									</Button>
								)}
							</div>
						)}
					</div>
				</div>

				{isQuizComplete && (
					<div className="bg-zinc-900 border-2 border-emerald-500 rounded-lg p-6 md:p-8 text-center mt-5 animate-fadeIn">
						<h3 className="text-emerald-500 mb-4 text-xl md:text-2xl">
							🎉 Quiz Completo!
						</h3>
						<p className="text-gray-200 mb-2.5 text-base md:text-lg">
							Pontuação Final: {score}/{questions.length} (
							{Math.round((score / questions.length) * 100)}%)
						</p>
						<p className="font-semibold text-emerald-500 text-sm md:text-base">
							{score === questions.length
								? 'Perfeito! Você é um especialista em testes! 🌟'
								: score >= questions.length * 0.8
									? 'Ótimo trabalho! Você entende bem os testes! 👏'
									: score >= questions.length * 0.6
										? 'Bom trabalho! Revise os conceitos e tente novamente. 📚'
										: 'Continue aprendendo! A prática leva à perfeição. 💪'}
						</p>
					</div>
				)}
			</div>
		</div>
	)
}
