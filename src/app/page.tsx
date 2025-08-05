import { QASlide } from '@/components/slides/qa-slide'

export default function Home() {
	return (
		<div className="p-4">
			<QASlide
				data={{
					id: 16,
					type: 'qa',
					title: 'Perguntas e Discussão',
					questions: [
						{
							icon: '🤔',
							question: 'Entendimento',
							text: 'Qual parte dos testes automatizados foi mais confusa? Vamos esclarecer juntos!',
						},
						{
							icon: '⚡',
							question: 'Valor Prático',
							text: 'Qual tipo de teste (Unitário, Integração, Interface) parece mais útil para seus projetos atuais?',
						},
						{
							icon: '🔄',
							question: 'Implementação',
							text: 'Quais desafios você antecipa ao implementar testes automatizados no seu fluxo de trabalho?',
						},
						{
							icon: '🚀',
							question: 'Próximos Passos',
							text: 'Quais ferramentas ou frameworks de teste você gostaria de aprender a seguir?',
						},
						{
							icon: '💡',
							question: 'Melhores Práticas',
							text: 'Quais melhores práticas de teste da sessão de hoje você implementará primeiro?',
						},
						{
							icon: '🎯',
							question: 'Aplicação no Mundo Real',
							text: 'Como você pode aplicar esses conceitos de teste aos seus projetos atuais ou futuros?',
						},
					],
				}}
			/>
		</div>
	)
}
